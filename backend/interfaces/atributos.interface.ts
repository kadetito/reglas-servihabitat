export interface Atributos {
  id?: string;
  id_tipo?: string;
  nombre: {
    type: string;
    required: [true, "El nombre es obligatorio"];
  };
}
