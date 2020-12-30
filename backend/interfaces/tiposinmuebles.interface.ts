export interface TiposInmueble {
  id?: string;
  name: {
    type: string;
    required: [true, "El nombre es obligatorio"];
  };
}
