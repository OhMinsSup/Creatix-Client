import * as React from 'react';
import styled from 'styled-components';
import Quill, { RangeStatic } from 'quill';
import MarkdownShortcuts from '../../../lib/quill/markdownShortcuts';
import 'quill/dist/quill.snow.css';
import palette from '../../../lib/styles/palette';
import Toolbar from './Toolbar';
import AddLink from './AddLink';
import TitleTextarea from './TitleTextarea';
import { getScrollTop, detectJSDOM } from '../../../lib/utils';

Quill.register('modules/markdownShortcuts', MarkdownShortcuts);

export interface QuillEditorProps {
  title: string;
  onChangeTitle: (title: string) => void;
  onClickSubmitModal: () => void;
}
export interface QuillEditorState {
  titleFocus: boolean;
  editorFocus: boolean;
  addLink: boolean;
  addLinkPosition: {
    left: number;
    top: number;
  };
  addLinkDefaultValue: string;
  shadow: boolean;
}

const StyledTitleTextarea = styled(TitleTextarea)`
  margin-bottom: 2rem;
`;

const QuillEditorWrapper = styled.div`
  padding-top: 5rem;
  position: relative;
  width: 768px;
  margin: 0 auto;
`;

const Editor = styled.div`
  margin-top: 1rem;
  position: relative;
  .ql-container {
    font-family: inherit;
  }
  .ql-editor {
    padding: 0;
    font-size: 1.3125rem;
    font-family: inherit;
    &:not(.ql-blank) {
      p {
        line-height: 1.875;
      }
    }
    color: ${palette.gray9};
    .ql-syntax {
      margin-top: 2rem;
      margin-bottom: 2rem;
      background: ${palette.gray8};
      color: white;
      font-size: 1rem;
      padding: 1rem;
      font-family: 'Fira Mono', monospace;
      border-radius: 8px;
      overflow-x: auto;
    }
    h1,
    h2,
    h3,
    h4 {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
    p + h1,
    p + h2,
    p + h3,
    p + h4 {
      margin-top: 1.5em;
    }
    ul,
    ol {
      padding-left: 0;
      li + li {
        margin-top: 1rem;
      }
      .ql-indent-1 {
        padding-left: 3em !important;
      }
      .ql-indent-2 {
        padding-left: 4.5em !important;
      }
      .ql-indent-3 {
        padding-left: 6em !important;
      }
      .ql-indent-4 {
        padding-left: 7.5em !important;
      }
      .ql-indent-5 {
        padding-left: 9em !important;
      }
      .ql-indent-6 {
        padding-left: 10.5em !important;
      }
      .ql-indent-7 {
        padding-left: 12em !important;
      }
      .ql-indent-8 {
        padding-left: 13.5em !important;
      }
    }
    font-size: 1.3125rem;
    blockquote {
      padding: 1.125rem;
      border-left: 8px solid ${palette.cyan6};
      background: ${palette.gray0};
      font-size: inherit;
    }
    blockquote + blockquote {
      padding-top: 0px;
    }
    p + blockquote {
      margin-top: 1rem;
    }
    blockquote + p {
      margin-bottom: 1rem;
    }
  }
  .ql-editor.ql-blank::before {
    left: 0px;
    color: ${palette.gray5};
  }
`;

export default class QuillEditor extends React.Component<
  QuillEditorProps,
  QuillEditorState
> {
  editor = React.createRef<HTMLDivElement>();
  titleTextarea: HTMLTextAreaElement | null = null;
  quill: Quill | null = null;

  state = {
    titleFocus: false,
    editorFocus: false,
    addLink: false,
    addLinkPosition: {
      top: 0,
      left: 0,
    },
    addLinkDefaultValue: '',
    shadow: false,
  };

  handleScroll = () => {
    const { shadow } = this.state;
    const top = getScrollTop();
    const nextShadow = top > 80;
    if (nextShadow !== shadow) {
      this.setState({
        shadow: nextShadow,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    if (detectJSDOM()) return;

    if (this.titleTextarea) {
      this.titleTextarea.focus();
    }

    const bindings = {
      removeQuote: {
        key: 'enter',
        empty: true,
        format: ['blockquote'],
        handler: (range: RangeStatic, context: any) => {
          quill.format('blockquote', false);
        },
      },
      removeQuoteWithBackspace: {
        key: 'backspace',
        empty: true,
        format: ['blockquote'],
        handler: (range: RangeStatic, context: any) => {
          quill.format('blockquote', false);
        },
      },
    };

    const quill = new Quill(this.editor.current as Element, {
      formats: [
        'bold',
        'header',
        'italic',
        'link',
        'list',
        'blockquote',
        'image',
        'indent',
        'underline',
        'strike',
      ],
      modules: {
        keyboard: {
          bindings,
        },
        markdownShortcuts: {},
        toolbar: {
          container: '#toolbar',
          handlers: {
            link: (value: string) => {
              const range = quill.getSelection();
              if (!range) return;
              const bounds = quill.getBounds(range.index);
              const format = quill.getFormat();
              const defaultValue = format.link || '';
              this.setState({
                addLink: true,
                addLinkPosition: {
                  left: bounds.left,
                  top: bounds.top + bounds.height,
                },
                addLinkDefaultValue: defaultValue,
              });
            },
          },
        },
        clipboard: {
          matchVisual: false,
        },
      },
      placeholder: '이야기를 적어보세요...',
    });

    this.quill = quill;

    (window as any).quill = quill;

    // handle blur and focus
    quill.on('selection-change', (range, oldRange, source) => {
      if (range === null && oldRange !== null) {
        this.setState({
          editorFocus: false,
        });
      }
      if (range !== null && oldRange === null) {
        this.setState({
          editorFocus: true,
        });
      }
    });
    const getIndent = (text: string) => text.length - text.trimLeft().length;

    const onEnter = () => {
      // handle keep-indent
      const text = quill.getText();
      const selection = quill.getSelection();
      if (!selection) return;
      const lastLineBreakIndex = text.lastIndexOf('\n', selection.index - 1);
      const lastLine = text.substr(
        lastLineBreakIndex + 1,
        selection.index - lastLineBreakIndex - 1,
      );
      const format = quill.getFormat(
        lastLineBreakIndex + 1,
        selection.index - lastLineBreakIndex - 1,
      );
    };
    quill.on('text-change', (delta, oldContents, source) => {
      const lastOps = delta.ops[delta.ops.length - 1];
      if (lastOps) {
        if (lastOps.insert === '\n') {
          onEnter();
        }
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleTitleFocus = () => {
    this.setState({
      titleFocus: true,
    });
  };

  handleTitleBlur = () => {
    this.setState({
      titleFocus: false,
    });
  };

  handleTitleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ([9, 13].includes(e.keyCode)) {
      e.preventDefault();
      if (this.quill) {
        this.quill.focus();
      }
    }
  };

  handleAddLink = (value: string) => {
    if (!this.quill) return;
    this.quill.format('link', value);
    this.setState({
      addLink: false,
    });
  };

  handleDeleteLink = () => {
    if (!this.quill) return;
    this.quill.format('link', false);
    this.setState({ addLink: false });
  };

  handleCancelAddLink = () => {
    this.setState({ addLink: false });
  };

  handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.onChangeTitle(e.target.value);
  };

  public render() {
    const { title, onClickSubmitModal } = this.props;
    const {
      addLink,
      addLinkPosition,
      titleFocus,
      addLinkDefaultValue,
      shadow,
    } = this.state;
    return (
      <QuillEditorWrapper data-testid="quill">
        <StyledTitleTextarea
          placeholder="제목을 입력하세요"
          onKeyDown={this.handleTitleKeyDown}
          inputRef={ref => {
            this.titleTextarea = ref;
          }}
          onFocus={this.handleTitleFocus}
          onBlur={this.handleTitleBlur}
          tabIndex={1}
          onChange={this.handleChangeTitle}
          value={title}
        />
        <Toolbar shadow={shadow} onClickSubmitModal={onClickSubmitModal} />
        <Editor>
          <div ref={this.editor} tabIndex={2} />
          {addLink && (
            <AddLink
              {...addLinkPosition}
              defaultValue={addLinkDefaultValue}
              onConfirm={this.handleAddLink}
              onClose={this.handleCancelAddLink}
              onDelete={this.handleDeleteLink}
            />
          )}
        </Editor>
      </QuillEditorWrapper>
    );
  }
}
