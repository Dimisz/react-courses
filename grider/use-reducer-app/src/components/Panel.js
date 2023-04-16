import classNames from 'classnames';

const Panel = ({ children, className,  ...rest }) => {
  const finalClassNames = classNames(
    'border p-3 shadow bg-red-100 w-full',
    className
  );

  return(
  <div {...rest} className={finalClassNames}>
    {children}
  </div>
  );
}

export default Panel;