import './outputPanel.css'
import {marked} from 'marked';


const OutputPanel = ({ data }) => {
  const html = marked.parse(data);


  return (
    <label htmlFor="preview">
      Панель виводу
      <div dangerouslySetInnerHTML={{ __html: html }} id="preview">





    </div>
    </label>

  );
};

export default OutputPanel