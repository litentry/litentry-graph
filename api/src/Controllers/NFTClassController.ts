export const getNFTClasses = (
  address?: string,
  query?: string,
  offset?: number,
  limit?: number,
  sort?: string
) => {
  console.log(`Get NFT Classes`);
};

export const getNFTClass = (classId: number) => {
  console.log(`Get single NFT Class`);
  console.log(`Class ID: ` + classId);
};
