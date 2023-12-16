interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// You have to use a self closing tag for this one: <Child />
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi there!
      <div>
        {color}
      </div>
      <div>
        <button onClick={onClick}>
          Click me
        </button>
      </div>
    </div>
  );
};

// Another way
// FC = FunctionComponent
// Using FC lets you use open and closing tags for components
// <Child> </Child>
export const ChildasFC: React.FC<ChildProps> = ({ color }) => {
  return (
    <div>
      Hi there!
      <div>
        {color}
      </div>
    </div>
  );
};