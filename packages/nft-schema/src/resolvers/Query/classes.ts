import { ClassModel, UnknownClass, Class, ClassType } from 'nft-models';

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

export async function classById(parent: undefined, id: string): Promise<Class> {
  const classModel = await ClassModel.findById(id);
  // sort out potentially null return type
  return classModel!;
}

export async function mintableClasses(): Promise<Class[]> {
  const classes = await ClassModel.find({
    type: ClassType.Simple,
    $expr: { $lt: ['$totalIssuance', '$quantity'] },
  });
  return classes;
}
