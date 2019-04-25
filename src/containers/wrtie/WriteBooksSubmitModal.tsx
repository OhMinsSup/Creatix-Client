import React from 'react';
import SubmitModal from '../../components/write/SubmitModal';

interface WriteBooksSubmitModalProps {
  visible: boolean;
}
const WriteBooksSubmitModal: React.SFC<WriteBooksSubmitModalProps> = ({
  visible,
}) => {
  if (!visible) return null;
  return <SubmitModal />;
};

export default WriteBooksSubmitModal;
