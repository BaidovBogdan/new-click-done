export interface BlogCardProps {
  image: string;
  mobileImage: string;
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
