declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

export interface Friend {
    id: string;
    link: string;
    pfp: string;
}

export interface Project {
    name: string;
    description: string;
    image: string;
    link: string;
}