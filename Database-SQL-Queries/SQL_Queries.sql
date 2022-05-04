CREATE DATABASE `Airlines`;

CREATE TABLE `Admin` (
  `AdminFname` varchar(25) NOT NULL,
  `AdminLname` varchar(25) NOT NULL,
  `AdminId` int NOT NULL,
  `NewAttribute` int NOT NULL,
  PRIMARY KEY (`AdminId`)
);

CREATE TABLE `Aircraft` (
  `LastMaintenance` date NOT NULL,
  `FirstFlightDate` date NOT NULL,
  `NextMaintenance` date NOT NULL,
  `TotalSeats` int NOT NULL,
  `AircraftID` int NOT NULL,
  `SeatNum` char(3) NOT NULL,
  PRIMARY KEY (`AircraftID`),
  KEY `SeatNum` (`SeatNum`),
  CONSTRAINT `aircraft_ibfk_1` FOREIGN KEY (`SeatNum`) REFERENCES `Seats` (`SeatNum`)
);

CREATE TABLE `AirlinesSystem` (
  `SeatNum` char(3) NOT NULL,
  `TicketNum` char(5) NOT NULL,
  `CancelTicketNum` char(5) NOT NULL,
  KEY `SeatNum` (`SeatNum`),
  KEY `TicketNum` (`TicketNum`),
  KEY `CancelTicketNum` (`CancelTicketNum`),
  CONSTRAINT `airlinessystem_ibfk_1` FOREIGN KEY (`SeatNum`) REFERENCES `FirstClass` (`SeatNum`),
  CONSTRAINT `airlinessystem_ibfk_2` FOREIGN KEY (`SeatNum`) REFERENCES `Business` (`SeatNum`),
  CONSTRAINT `airlinessystem_ibfk_3` FOREIGN KEY (`SeatNum`) REFERENCES `Economy` (`SeatNum`),
  CONSTRAINT `airlinessystem_ibfk_4` FOREIGN KEY (`TicketNum`) REFERENCES `Ticket` (`TicketNum`),
  CONSTRAINT `airlinessystem_ibfk_5` FOREIGN KEY (`CancelTicketNum`) REFERENCES `Ticket` (`TicketNum`)
);

CREATE TABLE `Business` (
  `SeatNum` char(3) NOT NULL,
  PRIMARY KEY (`SeatNum`),
  CONSTRAINT `business_ibfk_1` FOREIGN KEY (`SeatNum`) REFERENCES `Seats` (`SeatNum`)
);

CREATE TABLE `Economy` (
  `SeatNum` char(3) NOT NULL,
  PRIMARY KEY (`SeatNum`),
  CONSTRAINT `economy_ibfk_1` FOREIGN KEY (`SeatNum`) REFERENCES `Seats` (`SeatNum`)
);
 
 CREATE TABLE `FirstClass` (
  `SeatNum` char(3) NOT NULL,
  PRIMARY KEY (`SeatNum`),
  CONSTRAINT `firstclass_ibfk_1` FOREIGN KEY (`SeatNum`) REFERENCES `Seats` (`SeatNum`)
);

CREATE TABLE `Flight` (
  `Date` date NOT NULL,
  `Destination` varchar(25) NOT NULL,
  `SourceCity` varchar(25) NOT NULL,
  `FlightNum` char(5) NOT NULL,
  PRIMARY KEY (`FlightNum`)
);

CREATE TABLE `Passenger` (
  `Fname` varchar(25) NOT NULL,
  `Lname` varchar(25) NOT NULL,
  `ID` int NOT NULL,
  `DOBirth` date NOT NULL,
  `PhoneNum` int NOT NULL,
  `Email` varchar(32) NOT NULL,
  `FlightNum` char(5) DEFAULT NULL,
  `TicketNum` char(5) NOT NULL,
  `SeatNum` char(3) NOT NULL,
  `ReuseTicketNum` char(5) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FlightNum` (`FlightNum`),
  KEY `TicketNum` (`TicketNum`),
  KEY `SeatNum` (`SeatNum`),
  KEY `ReuseTicketNum` (`ReuseTicketNum`),
  CONSTRAINT `passenger_ibfk_1` FOREIGN KEY (`FlightNum`) REFERENCES `Flight` (`FlightNum`),
  CONSTRAINT `passenger_ibfk_2` FOREIGN KEY (`TicketNum`) REFERENCES `Ticket` (`TicketNum`),
  CONSTRAINT `passenger_ibfk_3` FOREIGN KEY (`SeatNum`) REFERENCES `Seats` (`SeatNum`),
  CONSTRAINT `passenger_ibfk_4` FOREIGN KEY (`ReuseTicketNum`) REFERENCES `Ticket` (`TicketNum`)
);

CREATE TABLE `Payment` (
  `CardNum` int NOT NULL,
  `ID` int NOT NULL,
  PRIMARY KEY (`CardNum`),
  KEY `ID` (`ID`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `Passenger` (`ID`)
);

CREATE TABLE `Seats` (
  `SeatNum` char(3) NOT NULL,
  `Price` int NOT NULL,
  `Status` varchar(10) NOT NULL,
  PRIMARY KEY (`SeatNum`)
);

CREATE TABLE `Ticket` (
  `TicketNum` char(5) NOT NULL,
  `FlightDate` date NOT NULL,
  `Weight` int NOT NULL,
  `Time` char(5) NOT NULL,
  `SeatNum` char(3) NOT NULL,
  PRIMARY KEY (`TicketNum`),
  KEY `SeatNum` (`SeatNum`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`SeatNum`) REFERENCES `Seats` (`SeatNum`)
);




