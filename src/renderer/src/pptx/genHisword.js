import PptxGenJS from 'pptxgenjs';
import path from 'path';
const hisWordBkgdPath = 'file:///Users/Koo/workspace/electron-webpack-quick-start/static/img/hisWordBkgd.png';

const pptx = new PptxGenJS();
pptx.setLayout('LAYOUT_4x3');
pptx.defineSlideMaster({
    title: 'HIS_WORD_SLIDE',
    bkgd: '000000',
    objects: [
        { text: { text: 'Status Report', options: { x: 3.0, y: 5.3, w: 5.5, h: 0.75 } } },
        {
            image: {
                x: 0,
                y: 0,
                w: '100%',
                h: '100%',
                path: true ? hisWordBkgdPath : path.join(__static, '/img/hisWordBkgd.png')
            }
        }
    ]
});

export const addSlide = (scripture, chapter, beginVerse, endVerse, hisword) => {
    const slide = pptx.addNewSlide('HIS_WORD_SLIDE');
    slide.addText(`${scripture} ${chapter}장 ${beginVerse}절 ~ ${endVerse}절`, {
        x: '26%',
        y: '15%',
        w: '60%',
        fontSize: 30,
        valign: 'top',
        color: 'b0b0b0'
    });
    slide.addText(hisword, { x: '23%', y: '24%', w: '60%', fontSize: 30, valign: 'top', bold: true });
};

export const saveSlide = ({ scripture, hisWord, beginChapter, endChapter, beginVerse, endVerse }) => () => {
    for (let i = beginVerse - 1; i < endVerse; i++) {
        addSlide(scripture, beginChapter, beginVerse, endVerse, hisWord[i]);
    }
    pptx.save('Sample Presentation');
};
