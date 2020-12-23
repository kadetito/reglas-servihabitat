import moment from "moment";

export const prepareAtributos = (atributos = []) => {
  return atributos.map((e) => ({
    ...e,
    end: moment(e.end).toDate(),
    start: moment(e.start).toDate(),
  }));
};
