import { ClassModel, UnknownClass, Class } from 'nft-models';

/*
this is the problem with discriminator models...
we know it's SimpleClass | MergeClass | ClaimClass
as in the filter, but we can't use that in the return type
*/
export default async function classes(
  parent: undefined,
  filter: Partial<UnknownClass>
): Promise<Class[]> {
  const classes = await ClassModel.find(filter);
  return classes;
}
