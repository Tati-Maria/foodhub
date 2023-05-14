interface IProps {
    children?: React.ReactNode;
    double?: boolean;
    triple?: boolean;
}

const FormGroup = ({children, double, triple}: IProps) => {
  return (
    <div
    className={
      `
      flex flex-col gap-6
      ${double ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : ''}
      ${triple ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : ''}
      `
    }
    >
        {children}
    </div>
  )
}

export default FormGroup;