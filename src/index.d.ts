export type ReadUserDto  = {
  id: string;
  email: string;
  name: string;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
}

export type ReadPermissionDto = {
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export type ReadTopicDto = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type ReadSeriesDto = {
  id: number;
  name: string;
  topic: ReadTopicDto;
  createdAt: string;
  updatedAt: string;
}

export type ReadPostDto = {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  author: ReadUserDto;
  topic: ReadTopicDto;
  series?: ReadSeriesDto;
  createdAt: string;
  updatedAt: string;
}
