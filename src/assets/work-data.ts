export interface Item {
  title: string;
  tags: Array<string>;
  externalLink: string;
  intro: string;
  previewImageLink: string;
}

export const WorkData = [
  {
    title: '友善食光網頁版',
    tags: ['Vue', 'TypeScript', 'axios', 'Tailwindcss'],
    externalLink: 'https://github.com/Sayoko123f/familymap',
    intro: '簡介：可瀏覽全台灣全家便利商店的友善食光打折食物。',
    previewImageLink:
      'https://raw.githubusercontent.com/Sayoko123f/familymap/master/demo/demo-2.JPG',
  },
  {
    title: '待辦事項',
    tags: ['Vue', 'TypeScript', 'axios', 'Tailwindcss'],
    externalLink: 'https://github.com/Sayoko123f/todo-5xruby',
    intro: '簡介：待辦事項清單應用程式',
    previewImageLink:
      'https://raw.githubusercontent.com/Sayoko123f/todo-5xruby/master/demo/demo-2.PNG',
  },
  {
    title: '密碼字串產生器',
    tags: ['Vue', 'TypeScript', 'Tailwindcss'],
    externalLink: 'https://github.com/Sayoko123f/password-get',
    intro: '簡介：可生成由「數字、英文、符號」組成的隨機字串。',
    previewImageLink:
      'https://raw.githubusercontent.com/Sayoko123f/password-get/master/demo/demo-1.PNG',
  },
  {
    title: '1A2B 猜數字',
    tags: ['Vue', 'TypeScript', 'Tailwindcss'],
    externalLink: 'https://github.com/Sayoko123f/guess-1a2b',
    intro: '簡介：單人猜數字小遊戲。',
    previewImageLink:
      'https://raw.githubusercontent.com/Sayoko123f/guess-1a2b/master/demo/demo-1.PNG',
  },
] as Array<Item>;
