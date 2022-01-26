export const exampleQuery = async (
  parent: { address?: string },
  args: { address?: string },
) => {
  const address = parent?.address || args?.address;

  if (!address) {
    throw new Error('address is required');
  }

  // do some logic with the args here... e.g. fetch data from ipfs or github

  return {
    property: true,
    anotherProperty: 'example',
    required: 'if you don\'t return me the query will fail as I am required'
  };
};
