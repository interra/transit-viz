  var cities = [
    {name:'Philadelphia', value:'phl', dataPath: 'data/septa_gtfs/routes_stops.csv', lon: '-75.205219', lat: '40.00061', zoom: '10' },
    {name:'Madison', value:'mds', dataPath: 'data/madison_gtfs/routes_stops.csv', lon: '-89.4011', lat: '43.0731', zoom: '12'},]

  var censusPoints = [
    {value:'B01003_001E', name: 'Total Population'},
    {value:'B01002_001E', name: 'Median Age'},
    {value:'B11005_001E', name: 'Total Households Age'},
    {value:'B11005_002E', name: 'Total Households With Under 18'},
    {value:'B19013_001E', name: 'Median Household Income'},
    {value:'B19001_001E', name: 'Total Households Income'},
    {value:'B19001_002E', name: 'Household Income $0 - $10,000'},
    {value:'B19001_003E', name: 'Household Income $10,000 - $14,999'},
    {value:'B19001_004E', name: 'Household Income $15,000 - $19,999'},
    {value:'B19001_005E', name: 'Household Income $20,000 - $24,999'},
    {value:'B19001_006E', name: 'Household Income $25,000 - $29,999'},
    {value:'B19001_007E', name: 'Household Income $30,000 - $34,999'},
    {value:'B19001_008E', name: 'Household Income $35,000 - $39,999'},
    {value:'B19001_009E', name: 'Household Income $40,000 - $44,999'},
    {value:'B19001_010E', name: 'Household Income $45,000 - $49,999'},
    {value:'B19001_011E', name: 'Household Income $50,000 - $59,999'},
    {value:'B19001_012E', name: 'Household Income $60,000 - $74,999'},
    {value:'B19001_013E', name: 'Household Income $75,000 - $99,999'},
    {value:'B19001_014E', name: 'Household Income $100,000 - $124,999'},
    {value:'B19001_015E', name: 'Household Income $125,000 - $149,999'},
    {value:'B19001_016E', name: 'Household Income $150,000 - $199,999'},
    {value:'B19001_017E', name: 'Household Income $200,000+'},
    {value:'B01001_001E', name: 'Total'},
    {value:'B01001_002E', name: 'Male'},
    {value:'B01001_003E', name: 'Male - Under 5 years'},
    {value:'B01001_004E', name: 'Male - 5 to 9 years'},
    {value:'B01001_005E', name: 'Male - 10 to 14 years'},
    {value:'B01001_006E', name: 'Male - 15 to 17 years'},
    {value:'B01001_007E', name: 'Male - 18 and 19 years'},
    {value:'B01001_008E', name: 'Male - 20 years'},
    {value:'B01001_009E', name: 'Male - 21 years'},
    {value:'B01001_010E', name: 'Male - 22 to 24 years'},
    {value:'B01001_011E', name: 'Male - 25 to 29 years'},
    {value:'B01001_012E', name: 'Male - 30 to 34 years'},
    {value:'B01001_013E', name: 'Male - 35 to 39 years'},
    {value:'B01001_014E', name: 'Male - 40 to 44 years'},
    {value:'B01001_015E', name: 'Male - 45 to 49 years'},
    {value:'B01001_016E', name: 'Male - 50 to 54 years'},
    {value:'B01001_017E', name: 'Male - 55 to 59 years'},
    {value:'B01001_018E', name: 'Male - 60 and 61 years'},
    {value:'B01001_019E', name: 'Male - 62 to 64 years'},
    {value:'B01001_020E', name: 'Male - 65 and 66 years'},
    {value:'B01001_021E', name: 'Male - 67 to 69 years'},
    {value:'B01001_022E', name: 'Male - 70 to 74 years'},
    {value:'B01001_023E', name: 'Male - 75 to 79 years'},
    {value:'B01001_024E', name: 'Male - 80 to 84 years'},
    {value:'B01001_025E', name: 'Male - 85+ years'},
    {value:'B01001_026E', name: 'Female'},
    {value:'B01001_027E', name: 'Female - Under 5 years'},
    {value:'B01001_028E', name: 'Female - 5 to 9 years'},
    {value:'B01001_029E', name: 'Female - 10 to 14 years'},
    {value:'B01001_030E', name: 'Female - 15 to 17 years'},
    {value:'B01001_031E', name: 'Female - 18 and 19 years'},
    {value:'B01001_032E', name: 'Female - 20 years'},
    {value:'B01001_033E', name: 'Female - 21 years'},
    {value:'B01001_034E', name: 'Female - 22 to 24 years'},
    {value:'B01001_035E', name: 'Female - 25 to 29 years'},
    {value:'B01001_036E', name: 'Female - 30 to 34 years'},
    {value:'B01001_037E', name: 'Female - 35 to 39 years'},
    {value:'B01001_038E', name: 'Female - 40 to 44 years'},
    {value:'B01001_039E', name: 'Female - 45 to 49 years'},
    {value:'B01001_040E', name: 'Female - 50 to 54 years'},
    {value:'B01001_041E', name: 'Female - 55 to 59 years'},
    {value:'B01001_042E', name: 'Female - 60 and 61 years'},
    {value:'B01001_043E', name: 'Female - 62 to 64 years'},
    {value:'B01001_044E', name: 'Female - 65 and 66 years'},
    {value:'B01001_045E', name: 'Female - 67 to 69 years'},
    {value:'B01001_046E', name: 'Female - 70 to 74 years'},
    {value:'B01001_047E', name: 'Female - 75 to 79 years'},
    {value:'B01001_048E', name: 'Female - 80 to 84 years'},
    {value:'B01001_049E', name: 'Female - 85+ years'},
    {value:'B04003_001E', name: 'Ethnicity Total'},
    {value:'B04003_002E', name: 'Afghan'},
    {value:'B04003_003E', name: 'Albanian'},
    {value:'B04003_004E', name: 'Alsatian'},
    {value:'B04003_005E', name: 'American'},
    {value:'B04003_006E', name: 'Arab'},
    {value:'B04003_007E', name: 'Arab - Egyptian'},
    {value:'B04003_008E', name: 'Arab - Iraqi'},
    {value:'B04003_009E', name: 'Arab - Jordanian'},
    {value:'B04003_010E', name: 'Arab - Lebanese'},
    {value:'B04003_011E', name: 'Arab - Moroccan'},
    {value:'B04003_012E', name: 'Arab - Palestinian'},
    {value:'B04003_013E', name: 'Arab - Syrian'},
    {value:'B04003_014E', name: 'Arab - Arab'},
    {value:'B04003_015E', name: 'Arab - Other Arab'},
    {value:'B04003_016E', name: 'Armenian'},
    {value:'B04003_017E', name: 'Assyrian/Chaldean/Syriac'},
    {value:'B04003_018E', name: 'Australian'},
    {value:'B04003_019E', name: 'Austrian'},
    {value:'B04003_020E', name: 'Basque'},
    {value:'B04003_021E', name: 'Belgian'},
    {value:'B04003_022E', name: 'Brazilian'},
    {value:'B04003_023E', name: 'British'},
    {value:'B04003_024E', name: 'Bulgarian'},
    {value:'B04003_025E', name: 'Cajun'},
    {value:'B04003_026E', name: 'Canadian'},
    {value:'B04003_027E', name: 'Carpatho Rusyn'},
    {value:'B04003_028E', name: 'Celtic'},
    {value:'B04003_029E', name: 'Croatian'},
    {value:'B04003_030E', name: 'Cypriot'},
    {value:'B04003_031E', name: 'Czech'},
    {value:'B04003_032E', name: 'Czechoslovakian'},
    {value:'B04003_033E', name: 'Danish'},
    {value:'B04003_034E', name: 'Dutch'},
    {value:'B04003_035E', name: 'Eastern European'},
    {value:'B04003_036E', name: 'English'},
    {value:'B04003_037E', name: 'Estonian'},
    {value:'B04003_038E', name: 'European'},
    {value:'B04003_039E', name: 'Finnish'},
    {value:'B04003_040E', name: 'French (except Basque)'},
    {value:'B04003_041E', name: 'French Canadian'},
    {value:'B04003_042E', name: 'German'},
    {value:'B04003_043E', name: 'German Russian'},
    {value:'B04003_044E', name: 'Greek'},
    {value:'B04003_045E', name: 'Guyanese'},
    {value:'B04003_046E', name: 'Hungarian'},
    {value:'B04003_047E', name: 'Icelander'},
    {value:'B04003_048E', name: 'Iranian'},
    {value:'B04003_049E', name: 'Irish'},
    {value:'B04003_050E', name: 'Israeli'},
    {value:'B04003_051E', name: 'Italian'},
    {value:'B04003_052E', name: 'Latvian'},
    {value:'B04003_053E', name: 'Lithuanian'},
    {value:'B04003_054E', name: 'Luxemburger'},
    {value:'B04003_055E', name: 'Macedonian'},
    {value:'B04003_056E', name: 'Maltese'},
    {value:'B04003_057E', name: 'New Zealander'},
    {value:'B04003_058E', name: 'Northern European'},
    {value:'B04003_059E', name: 'Norwegian'},
    {value:'B04003_060E', name: 'Pennsylvania German'},
    {value:'B04003_061E', name: 'Polish'},
    {value:'B04003_062E', name: 'Portuguese'},
    {value:'B04003_063E', name: 'Romanian'},
    {value:'B04003_064E', name: 'Russian'},
    {value:'B04003_065E', name: 'Scandinavian'},
    {value:'B04003_066E', name: 'Scotch-Irish'},
    {value:'B04003_067E', name: 'Scottish'},
    {value:'B04003_068E', name: 'Serbian'},
    {value:'B04003_069E', name: 'Slavic'},
    {value:'B04003_070E', name: 'Slovak'},
    {value:'B04003_071E', name: 'Slovene'},
    {value:'B04003_072E', name: 'Soviet Union'},
    {value:'B04003_073E', name: 'Subsaharan African'},
    {value:'B04003_074E', name: 'Subsaharan African - Cape Verdean'},
    {value:'B04003_075E', name: 'Subsaharan African - Ethiopian'},
    {value:'B04003_076E', name: 'Subsaharan African - Ghanaian'},
    {value:'B04003_077E', name: 'Subsaharan African - Kenyan'},
    {value:'B04003_078E', name: 'Subsaharan African - Liberian'},
    {value:'B04003_079E', name: 'Subsaharan African - Nigerian'},
    {value:'B04003_080E', name: 'Subsaharan African - Senegalese'},
    {value:'B04003_081E', name: 'Subsaharan African - Sierra Leonean'},
    {value:'B04003_082E', name: 'Subsaharan African - Somalian'},
    {value:'B04003_083E', name: 'Subsaharan African - South African'},
    {value:'B04003_084E', name: 'Subsaharan African - Sudanese'},
    {value:'B04003_085E', name: 'Subsaharan African - Ugandan'},
    {value:'B04003_086E', name: 'Subsaharan African - Zimbabwean'},
    {value:'B04003_087E', name: 'Subsaharan African - African'},
    {value:'B04003_088E', name: 'Subsaharan African - Other Subsaharan African'},
    {value:'B04003_089E', name: 'Swedish'},
    {value:'B04003_090E', name: 'Swiss'},
    {value:'B04003_091E', name: 'Turkish'},
    {value:'B04003_092E', name: 'Ukrainian'},
    {value:'B04003_093E', name: 'Welsh'},
    {value:'B04003_094E', name: 'West Indian'},
    {value:'B04003_095E', name: 'West Indian - Bahamian'},
    {value:'B04003_096E', name: 'West Indian - Barbadian'},
    {value:'B04003_097E', name: 'West Indian - Belizean'},
    {value:'B04003_098E', name: 'West Indian - Bermudan'},
    {value:'B04003_099E', name: 'West Indian - British West Indian'},
    {value:'B04003_100E', name: 'West Indian - Dutch West Indian'},
    {value:'B04003_101E', name: 'West Indian - Haitian'},
    {value:'B04003_102E', name: 'West Indian - Jamaican'},
    {value:'B04003_103E', name: 'West Indian - Trinidadian and Tobagonian'},
    {value:'B04003_104E', name: 'West Indian - U.S. Virgin Islander'},
    {value:'B04003_105E', name: 'West Indian - West Indian'},
    {value:'B04003_106E', name: 'West Indian - Other West Indian'},
    {value:'B04003_107E', name: 'Yugoslavian'},
    {value:'B04003_108E', name: 'Other groups'},
    {value:'B25058_001E', name: 'Median contract rent'},
    {value:'B25064_001E', name: 'Median gross rent'},
    {value:'B25077_001E', name: 'Median value (dollars)'},
    {value:'B25003_001E', name: 'Total'},
    {value:'B25003_002E', name: 'Owner occupied'},
    {value:'B25003_003E', name: 'Renter occupied'},
    {value:'B08301_001E', name: 'Total'},
    {value:'B08301_002E', name: 'Car, truck, or van'}, 
    {value:'B08301_003E', name: 'Drove alone'},
    {value:'B08301_004E', name: 'Carpooled'},
    {value:'B08301_005E', name: 'In 2-person carpool'},
    {value:'B08301_006E', name: 'In 3-person carpool'},
    {value:'B08301_007E', name: 'In 4-person carpool'},
    {value:'B08301_008E', name: 'In 5- or 6-person carpool'},
    {value:'B08301_009E', name: 'In 7-or-more-person carpool'},
    {value:'B08301_010E', name: 'Public transportation (excluding taxicab)'}, 
    {value:'B08301_011E', name: 'Bus or trolley bus'},
    {value:'B08301_012E', name: 'Streetcar or trolley car (carro publico in Puerto Rico)'},
    {value:'B08301_013E', name: 'Subway or elevated'},
    {value:'B08301_014E', name: 'Railroad'},
    {value:'B08301_015E', name: 'Ferryboat'},
    {value:'B08301_016E', name: 'Taxicab'}, 
    {value:'B08301_017E', name: 'Motorcycle'}, 
    {value:'B08301_018E', name: 'Bicycle'}, 
    {value:'B08301_019E', name: 'Walked'}, 
    {value:'B08301_020E', name: 'Other means'}, 
    {value:'B08301_021E', name: 'Worked at home'}, 
    {value:'B25035_001E', name: 'Median year structure built'},];
