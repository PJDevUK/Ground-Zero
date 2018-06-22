SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `Customers`;
DROP TABLE IF EXISTS `Enquiries`;
DROP TABLE IF EXISTS `Quotes`;
DROP TABLE IF EXISTS `Hauliers`;
DROP TABLE IF EXISTS `Invoices`;
DROP TABLE IF EXISTS `Addresses`;
DROP TABLE IF EXISTS `CargoEx`;
DROP TABLE IF EXISTS `Customers_Addresses_Intersection`;
DROP TABLE IF EXISTS `Bookings`;
DROP TABLE IF EXISTS `Payment_Accounts`;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `Customers` (
    `CusID` INTEGER(11) NOT NULL,
    `Company_Name` VARCHAR(50),
    `Title` VARCHAR(10) NOT NULL,
    `First_Name` VARCHAR(25) NOT NULL,
    `Surname` VARCHAR(25) NOT NULL,
    `Mobile_Contact` INTEGER(15),
    `Landline_Contact` INTEGER(15),
    `Email` VARCHAR(50) NOT NULL,
    `Login_Password` VARCHAR(20) NOT NULL,
    `Mobile_Notifications` BOOLEAN NOT NULL,
    `Date_Created` DATETIME NOT NULL,
    `Invoice_Address` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`CusID`),
    UNIQUE (`CusID`)
);

CREATE TABLE `Enquiries` (
    `Enquiry_ID` INTEGER(11) NOT NULL,
    `CusID` INTEGER(11) NOT NULL,
    `Handlers_Name` VARCHAR(20),
    `Date_Created` TIMESTAMP NOT NULL,
    `Trialer_Type` VARCHAR(10) NOT NULL,
    `Gross_Weight_Kg` INTEGER NOT NULL,
    `Equipment_Required` VARCHAR(50),
    `Tail_Lift_Collection` BOOLEAN NOT NULL,
    `Tail_Lift_Delivery` BOOLEAN NOT NULL,
    `Collection_Date` DATETIME,
    `Collection_Location` VARCHAR(20) NOT NULL,
    `Delivery_Location` VARCHAR(20) NOT NULL,
    `Load Details` VARCHAR(500),
    `Auto_Accept` BOOLEAN NOT NULL,
    `Accept_Price` INTEGER,
    `Delete_Scheduled` DATE NOT NULL,
    PRIMARY KEY (`Enquiry_ID`),
    UNIQUE (`Enquiry_ID`)
);

CREATE TABLE `Quotes` (
    `Quote_ID` INTEGER(11) NOT NULL,
    `Enquires_Enquiry_ID` INTEGER(11) NOT NULL,
    `Hauliers_Haulier_ID` INTEGER(11) NOT NULL,
    `Handlers_Name` VARCHAR(20) NOT NULL,
    `Rate_Offer` INTEGER NOT NULL,
    PRIMARY KEY (`Quote_ID`)
);

CREATE TABLE `Hauliers` (
    `Haulier_ID` INTEGER(11) NOT NULL,
    `Addresses_Adrs_ID` INTEGER(11) NOT NULL,
    `Company_Name` VARCHAR(50),
    `Email` VARCHAR(50) NOT NULL,
    `Contact_Landline` INTEGER(13),
    `Date_Created` TIMESTAMP NOT NULL,
    PRIMARY KEY (`Haulier_ID`)
);

CREATE TABLE `Invoices` (
    `Invoice_ID` INTEGER(11) NOT NULL,
    `CusID` INTEGER(11) NOT NULL,
    `Hauliers_Reference` VARCHAR(30),
    `Cust_Internal_Ref` VARCHAR(30),
    `Collect_Location` VARCHAR(50) NOT NULL,
    `Delivery_Location` VARCHAR(50) NOT NULL,
    `Date_Created` DATETIME NOT NULL,
    `Collection_Date` DATETIME,
    `Delivery_Date` DATETIME,
    `Vat_Fee` INTEGER NOT NULL,
    `Duty` INTEGER NOT NULL,
    `Admin_Fee` INTEGER NOT NULL,
    `Rate` INTEGER NOT NULL,
    `Payment_Terms` VARCHAR(70),
    `Booking_Ref` INTEGER NOT NULL,
    `Tot_Net_Value` INTEGER NOT NULL,
    PRIMARY KEY (`Invoice_ID`),
    UNIQUE (`Invoice_ID`)
);

CREATE TABLE `Addresses` (
    `Adrs_ID` INTEGER(11) NOT NULL,
    `Addressee_Full_Name` VARCHAR(30) NOT NULL,
    `Address_Line_1` VARCHAR(40) NOT NULL,
    `Address_Line_2` VARCHAR(40),
    `Address_Line_3` VARCHAR(40),
    `Address_Line_4` VARCHAR(40),
    `City_Town` VARCHAR(15) NOT NULL,
    `County_State` VARCHAR(15) NOT NULL,
    `Country` VARCHAR(15) NOT NULL,
    `Post_Zip_Code` VARCHAR(8) NOT NULL,
    PRIMARY KEY (`Adrs_ID`),
    UNIQUE (`Adrs_ID`)
);

CREATE TABLE `CargoEx` (
    `CompanyID` INTEGER NOT NULL,
    `Company_Name` VARCHAR(25) NOT NULL,
    `Addresses_Adrs_ID` INTEGER(11) NOT NULL,
    `Registration_Num` INTEGER(15) NOT NULL,
    `Contact_Num` INTEGER(13) NOT NULL,
    `Contact_Email` VARCHAR(50) NOT NULL,
    `Vat_Num` VARCHAR(25) NOT NULL,
    PRIMARY KEY (`CompanyID`),
    UNIQUE (`CompanyID`, `Company_Name`)
);

CREATE TABLE `Customers_Addresses_Intersection` (
    `Addresses_Adrs_ID` INTEGER(11) NOT NULL,
    `Customers_CusID` INTEGER(11) NOT NULL,
    `Default_Address` BOOLEAN NOT NULL,
    PRIMARY KEY (`Addresses_Adrs_ID`, `Customers_CusID`)
);

CREATE TABLE `Bookings` (
    `BookingID` INTEGER NOT NULL,
    `Customers_CusID` INTEGER(11) NOT NULL,
    `Hauliers_Haulier_ID` INTEGER(11) NOT NULL,
    `Hauliers_Handler_Name` VARCHAR(20) NOT NULL,
    `Haulier_Internal_Ref` VARCHAR(30),
    `Customers_Handler_Name` VARCHAR(20),
    `Cust_Internal_Ref` VARCHAR(30),
    `Booking_Date` DATE NOT NULL,
    `Trialer_Type` VARCHAR(10) NOT NULL,
    `Gross_Weight_Kg` INTEGER NOT NULL,
    `Tail_Lift_Collection` BOOLEAN NOT NULL,
    `Tail_Lift_Delivery` BOOLEAN NOT NULL,
    `Collection_Ref` VARCHAR(25),
    `Collection_Contact` VARCHAR(70),
    `Collection_Date` DATETIME NOT NULL,
    `Collection_Address` VARCHAR(200) NOT NULL,
    `Delivery_Ref` VARCHAR(25),
    `Delivery_Contact` VARCHAR(70) NOT NULL,
    `Delivery_Date` DATETIME,
    `Delivery_Address` VARCHAR(200) NOT NULL,
    `Accepted_Haulier_Rate` INTEGER NOT NULL,
    `Equipment_Required` VARCHAR(50),
    `Additional_Notes` VARCHAR(500),
    `Driver_Instructions` VARCHAR(200),
    PRIMARY KEY (`BookingID`),
    UNIQUE (`BookingID`)
);

CREATE TABLE `Payment_Accounts` (
    `Payment_AccountID` INTEGER NOT NULL,
    `Payment_Description` VARCHAR(100),
    `Currency_Code` VARCHAR(3) NOT NULL,
    `BIC` VARCHAR(15) NOT NULL,
    `IBAN` VARCHAR(30) NOT NULL,
    `Sort_Code` INTEGER(6) NOT NULL,
    `Account_Number` INTEGER(11) NOT NULL,
    PRIMARY KEY (`Payment_AccountID`),
    UNIQUE (`Payment_AccountID`)
);
