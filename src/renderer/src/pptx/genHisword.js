import PptxGenJS from 'pptxgenjs';
import path from 'path';
import { addHisWord } from '../modules/selectedHisWord';
const hisWordBkgdPath = 'file:///Users/Koo/workspace/electron-webpack-quick-start/static/img/hisWordBkgd.png';
const titleBkgdPath = 'file:///Users/Koo/workspace/electron-webpack-quick-start/static/img/titleBkgd.png';

const pptx = new PptxGenJS();
pptx.setLayout('LAYOUT_4x3');
pptx.defineSlideMaster({
    title: 'HIS_WORD_SLIDE',
    bkgd: '000000',
    objects: [
        {
            image: {
                x: 0,
                y: 0,
                w: '100%',
                h: '100%',
                path: false ? hisWordBkgdPath : path.join(__static, '/img/hisWordBkgd.png')
            }
        }
    ]
});

export const makeSlide = ({ scripture, word, beginChapter, beginVerse, endVerse }) => {
    const slide = pptx.addNewSlide('HIS_WORD_SLIDE');
    slide.addText(`${scripture} ${beginChapter}장 ${beginVerse}절 ~ ${endVerse}절`, {
        x: '26%',
        y: '15%',
        w: '60%',
        fontSize: 30,
        valign: 'top',
        color: 'b0b0b0'
    });
    slide.addText(word, { x: '23%', y: '24%', w: '60%', fontSize: 30, valign: 'top', bold: true });
};

export const addSlide = ({ scripture, hisWord, beginChapter, beginVerse, endVerse }) => {
    for (let i = beginVerse - 1; i < endVerse; i++) {
        makeSlide({ scripture, hisWord, beginChapter, beginVerse, endVerse, word: hisWord[i] });
    }
};

export const addTitleSlide = ({ scripture, beginChapter, beginVerse, endVerse }) => {
    console.log('addTITLE');
    const slide = pptx.addNewSlide();
    slide.addImage({
        x: 0,
        y: 0,
        w: '100%',
        h: '100%',
        path: false ? titleBkgdPath : path.join(__static, '/img/titleBkgd.png')
    });
    slide.addText(`${scripture}\n${beginChapter}장 ${beginVerse}절 ~ ${endVerse}절`, {
        x: '64%',
        y: '43%',
        w: '30%',
        fontSize: 20,
        align: 'center'
    });
};

export const saveSlide = () => {
    pptx.save('Sample Presentation');
};
