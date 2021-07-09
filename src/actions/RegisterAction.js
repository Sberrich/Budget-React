export const INSCRIPTION_USER = "INSCRIPTION_USER";

export const INSCRIPTION_USER_SUCCESS = "INSCRIPTION_USER_SUCCESS";

export const INSCRIPTION_USER_ERROR = "INSCRIPTION_USER_ERROR";

// Register

export const InscriptionAction = (dataInsc) => ({
  type: INSCRIPTION_USER,
  data: dataInsc,
});

export const inscriptionUserSuccess = (data) => ({
  type: INSCRIPTION_USER_SUCCESS,
  data,
});

export const inscriptionError = (error) => ({
  type: INSCRIPTION_USER_ERROR,
  error,
});
