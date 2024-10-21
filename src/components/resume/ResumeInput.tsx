import { dataStore } from '../../store/dataStore';
import { TextArea } from '../ui/TextArea';

const ResumeInput = () => {
  const { resumeText, setResumeText } = dataStore();

  return (
    <TextArea
      value={resumeText}
      onChange={(e) => setResumeText(e.target.value)}
      placeholder="원하는 자기소개서를 입력해주세요. 저희 AI가 글을 분석한 후 개선해드립니다."
      rows={10}
    />
  );
};

export default ResumeInput;
