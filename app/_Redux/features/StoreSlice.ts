import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "currentUser",
  initialState: {
    isLoggin: false,
    newuser: {
      NewFirstName: "Abdallh",
      NewLastName: "Rakha",
      NewPhone: "01091415560",
      NewEmail: "Abdallhsabry194@gmail.com",
      NewBirthday: "01-07-2000",
      NewCountry: "Egypt",
      NewPassword: "0",
    },
    PassportDetails: {
      Nationality: "",
      Passportnumber: "",
      PassportExpiration: "",
      placeofissue: "",
    },

    flightbookedsuccessfully: {
      isSuccess: false,
      TotalPrice: "",
    },

    BookDetails: {
      Departureairport: "",
      Arrivalirport: "",
      CheckIn: "",
      CheckOut: "",
      Adult: "",
      Children: "",
      Infant: "",
      Class: "",
      BookId: "",
    },
    SelectedTravel: {
      HourDep: "",
      HourArr: "",
      MinuteDep: "",
      MinuteArr: "",
    },
    validPassportData: false,
    TravelArrival: [],
    TravelTakeoff: [],
    TravelCheckIn: [],
    TravelCheckOut: [],

    userNameFromStore: "Abdallh",
    PassWordFromStore: "1234",
  },
  reducers: {
    ActiveLoggin: (state) => {
      state.isLoggin = true;
    },
    ActivePassportDetails: (state) => {
      state.validPassportData = true;
    },
    AddNewUser: (state, action) => {
      state.newuser = action.payload;
      // state.userNameFromStore = action.payload.NewEmail;
      // state.PassWordFromStore = action.payload.NewPassword;
    },
    ActiveBook: (state, action) => {
      state.flightbookedsuccessfully.isSuccess = true;
      state.flightbookedsuccessfully.TotalPrice = action.payload;
    },
    ActiveLogout: (state) => {
      state.isLoggin = false;
    },
    AddPassportDetails: (state, action) => {
      state.PassportDetails = action.payload;
    },
    PrimarySearch: (state, action) => {
      state.BookDetails = action.payload;
    },
    SetTravelTime: (state, action) => {
      state.SelectedTravel = action.payload;
    },
    DeleteTicket: (state) => {
      state.flightbookedsuccessfully.isSuccess = false;
      state.BookDetails.Departureairport = "";
      state.BookDetails.Arrivalirport = "";
      state.BookDetails.CheckIn = "";
      state.BookDetails.CheckOut = "";
      state.BookDetails.Adult = "";
      state.BookDetails.Children = "";
      state.BookDetails.Infant = "";
      state.BookDetails.Class = "";
      state.BookDetails.BookId = "";
    },
  },
});

export const {
  ActiveLoggin,
  AddNewUser,
  AddPassportDetails,
  PrimarySearch,
  ActivePassportDetails,
  ActiveLogout,
  SetTravelTime,
  ActiveBook,
  DeleteTicket,
} = currentUser.actions;
export default currentUser.reducer;
