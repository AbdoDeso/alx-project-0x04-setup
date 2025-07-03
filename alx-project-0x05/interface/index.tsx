import { ReactNode } from "react"

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

export interface PageRouteProps {
  pageRoute: string
}
export interface LayoutProps {
  children: ReactNode;
}


export interface CardProps {
    label?: string;
  
  }

  export interface PropertyProps {
    name?:     string;
    address?:  string|number;
    rating?:   number;
    category?: string[];
    price?:    number;
    offers?:   number[];
    image?:    string;
    discount?: string;

    Address: {
    state?:   string;
    city?:    string;
    country?: string;
}

Offers: {
    bed?:       string;
    shower?:    string;
    occupants?: string;
}

}




  