import { RegistrarModel } from '../../../models';
import { Registrar } from '../../../@types';

export default async function registrars(): Promise<Registrar[]> {
  const registrars = await RegistrarModel.find();
  return registrars;
}

export async function registrarById(
  _: Record<string, never>,
  { id }: { id: number }
): Promise<Registrar | null> {
  const registrar = await RegistrarModel.findById(id);
  return registrar;
}
