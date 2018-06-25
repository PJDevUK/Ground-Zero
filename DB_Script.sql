
CREATE TABLE `Quotes` (
    `Quote_ID` INTEGER(11) NOT NULL,
    `Enquires_Enquiry_ID` INTEGER(11) NOT NULL,
    `Hauliers_Haulier_ID` INTEGER(11) NOT NULL,
    `Handlers_Name` VARCHAR(20) NOT NULL,
    `Rate_Offer` INTEGER NOT NULL,
    PRIMARY KEY (`Quote_ID`)
);