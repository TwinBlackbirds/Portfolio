export default class Project {
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public url: string | null = null,
    public className: string | null = null
  ) {}
}