export interface ContactData {
    name: string;
    title: string;
    icon: string;
    path: string;
    color: string;
};

export const contactData : ContactData[] = [
    { name: '@spawlik15', title: 'GitHub', icon: 'fa-github-square', path: 'https://github.com/spawlik15', color: 'text-white' },
    { name: '@szymon-pawlik', title: 'LinkedIn', icon: 'fa-linkedin', path: 'https://www.linkedin.com/in/szymon-pawlik-784a59262/', color: 'text-blue-400' },
    { name: 'szymonpawlik1555@gmail.com', title: 'E-Mail', icon: 'md-email-round', path: 'szymonpawlik1555@gmail.com', color: 'text-gray-400' }
];