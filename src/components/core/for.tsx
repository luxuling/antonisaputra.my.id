import * as React from 'react';

interface ForProps<T> {
  data: T[];
  render: (item: T, index: number) => React.ReactNode;
}

export default function For({ data, render }: ForProps<any>) {
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>{render(item, index)}</React.Fragment>
      ))}
    </>
  );
}
