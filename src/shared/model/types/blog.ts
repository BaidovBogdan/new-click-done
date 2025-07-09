export interface BlogCardProps {
  image: string;
  mobileImage: string;
  desc: string;
  date: string;
  big?: boolean;
  xlImage?: string;
}

export interface XlBlogCardProps {
  image: string;
  desc: string;
  date: string;
  big?: boolean;
}

export interface BlogPageCardProps {
  description: string;
  date: string;
  image: string;
}

export interface FilterButtonProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
