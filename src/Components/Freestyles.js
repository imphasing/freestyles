import React, { Component } from 'react';

const freestyles = [
    {
    	"highlight": false,
        "title": "BUGSY slick talks on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=BQpT4te9NtE",
    },
    {
    	"highlight": false,
        "title": "Young Devyn Freestyles On Bars On I-95",
        "url": "https://www.youtube.com/watch?v=8frCG1ITrO8",
    },
    {
    	"highlight": false,
        "title": "Joey Bada$$ Freestyle With The LA Leakers | #Freestyle005",
        "url": "https://www.youtube.com/watch?v=QOQ-yw1BdAA",
    },
    {
    	"highlight": false,
        "title": "JUICE WRLD FREESTYLE ON FUNK FLEX | #FREESTYLE101",
        "url": "https://www.youtube.com/watch?v=ySO4m7WNXDY",
    },
    {
    	"highlight": false,
        "title": "Denzel Curry freestyle! Goes hard on Scarface & Wu Tang beats",
        "url": "https://www.youtube.com/watch?v=sZtWaUdPaK4",
    },
    {
    	"highlight": false,
        "title": "Juice WRLD Freestyles Over 'Headlines' by Drake",
        "url": "https://www.youtube.com/watch?v=s_DwqTNRIzM",
    },
    {
    	"highlight": false,
        "title": "YBN Cordae Freestyle w/ The L.A. Leakers - Freestyle #045",
        "url": "https://www.youtube.com/watch?v=k7IyyU6X-2Q",
    },
    {
    	"highlight": false,
        "title": "Vic Mensa DESTROYS Freestyle w/ Bootleg Kev & Hed over Uzi & Pharrell's \"Neon Guts\" Instrumental",
        "url": "https://www.youtube.com/watch?v=ImoUdNLJTEs",
    },
    {
    	"highlight": false,
        "title": "Juice WRLD freestyle spits fire OVER AN HOUR! Westwood",
        "url": "https://www.youtube.com/watch?v=igc1wYW448w",
    },
    {
    	"highlight": false,
        "title": "Tsu Surf freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=sIpbI0SQczM",
    },
    {
    	"highlight": false,
        "title": "THE HOODIES FREESTYLE ON FLEX | #FREESTYLE082",
        "url": "https://www.youtube.com/watch?v=Ax2Wf-WUkOU",
    },
    {
    	"highlight": false,
        "title": "Cory Gunz Freestyles on Flex | #Freestyle048",
        "url": "https://www.youtube.com/watch?v=1Bne47tlNvU",
    },
    {
    	"highlight": false,
        "title": "GOODZ x BonesBrigante Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=xYoeBNL_IS8",
    },
    {
    	"highlight": false,
        "title": "WordPlay A and SkeeiNardo DiCaprio Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=gSCHjzyUdQA",
    },
    {
    	"highlight": false,
        "title": "DON Q & A1 FREESTYLE ON FLEX | #FREESTYLE094",
        "url": "https://www.youtube.com/watch?v=pchZfPiH4PM",
    },
    {
    	"highlight": false,
        "title": "Oun-P Freestyles on Flex | Freestyle #028",
        "url": "https://www.youtube.com/watch?v=o0_Bf-lAcAE",
    },
    {
    	"highlight": false,
        "title": "Don Q Freestyle w/ The L.A. Leakers - Freestyle #052",
        "url": "https://www.youtube.com/watch?v=82pIRFTpakA",
    },
    {
    	"highlight": false,
        "title": "Wasionkey freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=upfp4kiz4oc",
    },
    {
    	"highlight": false,
        "title": "Big Krit Freestyle With The L.A. Leakers - Freestyle #030",
        "url": "https://www.youtube.com/watch?v=OGKchfcd-5w",
    },
    {
    	"highlight": false,
        "title": "Kodak Black, 21 Savage, Lil Uzi Vert, Lil Yachty & Denzel Curry's 2016 XXL Freshmen Cypher",
        "url": "https://www.youtube.com/watch?v=U_IbIMUbh-k",
    },
    {
    	"highlight": false,
        "title": "FLATBUSH ZOMBIES FREESTYLE ON FLEX | #FREESTYLE095",
        "url": "https://www.youtube.com/watch?v=3cUlwQ8HMB0",
    },
    {
    	"highlight": false,
        "title": "LIL YACHTY FREESTYLE ON FUNK FLEX | #FREESTYLE091",
        "url": "https://www.youtube.com/watch?v=9eqE7HgIBKU",
    },
    {
    	"highlight": false,
        "title": "LLOYD BANKS FREESTYLES ON FLEX | #FREESTYLE066",
        "url": "https://www.youtube.com/watch?v=9cWuU4Se6_I",
    },
    {
    	"highlight": false,
        "title": "SNS FREESTYLES ON FLEX | #FREESTYLE079",
        "url": "https://www.youtube.com/watch?v=RlZlREKlOqY",
    },
    {
    	"highlight": false,
        "title": "Man U iLL Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=CFEtRzo4Dss",
    },
    {
    	"highlight": false,
        "title": "Bugatti203 freestyles On Bars On I-95",
        "url": "https://www.youtube.com/watch?v=l11W5_SQmnc",
    },
    {
    	"highlight": false,
        "title": "King Dreams Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=N4tuaX6rANU",
    },
    {
    	"highlight": false,
        "title": "Cambatta freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=RnPnWtR3ntQ",
    },
    {
    	"highlight": false,
        "title": "Nuff Said Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=ZEC7PS2hUlo",
    },
    {
    	"highlight": false,
        "title": "SNS Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=_bXqv-D1-Jc",
    },
    {
    	"highlight": false,
        "title": "Fabeyon freestyles On Bars On I-95",
        "url": "https://www.youtube.com/watch?v=G-5XdrBVkNI",
    },
    {
    	"highlight": false,
        "title": "King Kami Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=VLHWTtJ123g",
    },
    {
    	"highlight": false,
        "title": "FREESTYLE | DUBLIN",
        "url": "https://www.youtube.com/watch?v=eoKX28DW-Ik",
    },
    {
    	"highlight": false,
        "title": "URL's Own: Tay Roc | Freestyle #026",
        "url": "https://www.youtube.com/watch?v=lxTfSmLO3TM",
    },
    {
    	"highlight": false,
        "title": "KAI CASH freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=37m7EIG0_-I",
    },
    {
    	"highlight": false,
        "title": "Brillo Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=AOXKpg2RNqE",
    },
    {
    	"highlight": false,
        "title": "MULA GUAPO Freestyles On Bars On I-95",
        "url": "https://www.youtube.com/watch?v=sPz6dtx6Npg",
    },
    {
    	"highlight": false,
        "title": "Juice WRLD Freestyle with DJ Self",
        "url": "https://www.youtube.com/watch?v=c6BTr7Ghc0s",
    },
    {
    	"highlight": false,
        "title": "Belly Freestyle With The L A Leakers | #Freestyle004",
        "url": "https://www.youtube.com/watch?v=ynyNa0zeR78",
    },
    {
    	"highlight": false,
        "title": "T-TOP Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=eaPZ3ZBOuEE",
    },
    {
    	"highlight": false,
        "title": "Machine Gun Kelly | Funk Flex | #Freestyle107",
        "url": "https://www.youtube.com/watch?v=8UQY4gmzkGI",
    },
    {
    	"highlight": false,
        "title": "Machine Gun Kelly Freestyle With The LA Leakers | #Freestyle013",
        "url": "https://www.youtube.com/watch?v=F-iube-MpJE",
    },
    {
    	"highlight": false,
        "title": "URL TV's Own T-Top x Goodz on Funk Flex | #Freestyle050",
        "url": "https://www.youtube.com/watch?v=ET-25-zc6bs",
    },
    {
    	"highlight": false,
        "title": "Method Man & Black Thought Cypher on Sway in The Morning",
        "url": "https://www.youtube.com/watch?v=6_ZT63RPqWw",
    },
    {
    	"highlight": false,
        "title": "Mone Corleone Freestyles on Bars on I-95",
        "url": "https://www.youtube.com/watch?v=wHdJ4sUYuAY",
    },
    {
    	"highlight": false,
        "title": "ARTIST UNPLUGGED: Young Devyn - Chun Li & Barbie Tingz Remix (EP.3)",
        "url": "https://www.youtube.com/watch?v=ySKtv_f-dZA",
    },
    {
    	"highlight": false,
        "title": "Friday Fire Cypher: 16 Year Old Phenom Young Devyn Shreds The Mic",
        "url": "https://www.youtube.com/watch?v=PbJ9Q8_wcpc",
    },
    {
    	"highlight": false,
        "title": "Juice WRLD freestyle NEW! Hour of fire over Eminem beats! Westwood (4K)",
        "url": "https://www.youtube.com/watch?v=fSoT13msPe4",
    },
    {
    	"highlight": false,
        "title": "Dizzee Rascal hard freestyle on Homerton B! Westwood",
        "url": "https://www.youtube.com/watch?v=fdCLOEmuJ_c",
    },
    {
    	"highlight": false,
        "title": "D Double E freestyle! goes hard on hip hop beats - Westwood",
        "url": "https://www.youtube.com/watch?v=WqRY2AOkma8",
    },
    {
    	"highlight": false,
        "title": "SWIZZ BEATZ & FRENCH MONTANA | Funk Flex | #Freestyle110",
        "url": "https://www.youtube.com/watch?v=6eFBStLL2eQ",
    },
    {
    	"highlight": false,
        "title": "Belly Freestyle w/ The L.A. Leakers - Freestyle #060",
        "url": "https://www.youtube.com/watch?v=5pth8qjeh58",
    },
    {
    	"highlight": false,
        "title": "K Price Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=_w-63glovds",
    },
    {
    	"highlight": false,
        "title": "King Card and Rayquan Da Don \"Verse for Verse\" on Bars on I-95",
        "url": "https://www.youtube.com/watch?v=NTWZ_ddnXKE",
    },
    {
    	"highlight": false,
        "title": "Haddy Racks Freestyle on Bars on I-95",
        "url": "https://www.youtube.com/watch?v=JQe9iuWpsIA",
    },
    {
    	"highlight": false,
        "title": "Jean D’eau Freestyles On Bars On I-95",
        "url": "https://www.youtube.com/watch?v=pefp_i21NAQ",
    },
    {
    	"highlight": false,
        "title": "STYLES P & DAVE EAST | Funk Flex | #Freestyle111 PART 1",
        "url": "https://www.youtube.com/watch?v=7KQObnGff_c",
    },
    {
    	"highlight": false,
        "title": "ROYCE DA 5'9\" | DJ PREMIER | #FREESTYLE090 WITH FUNK FLEX",
        "url": "https://www.youtube.com/watch?v=kP3xrSPYi-0",
    },
    {
    	"highlight": false,
        "title": "CYPHER Hip Hop Awards '11 [HQ] - Busta Rhymes, Reek da Villian, 2 Chainz, Ludacris",
        "url": "https://www.youtube.com/watch?v=2MnNZMGSmyQ",
    },
    {
    	"highlight": false,
        "title": "STYLES P & DAVE EAST | Funk Flex | #Freestyle112 PART 2",
        "url": "https://www.youtube.com/watch?v=IwbQ9C0WkRY",
    },
    {
    	"highlight": false,
        "title": "KShine | Funk Flex | #Freestyle113",
        "url": "https://www.youtube.com/watch?v=ncRt3k0CDUo",
    },
    {
    	"highlight": false,
        "title": "Lady London Freestyles on Bars on I-95",
        "url": "https://www.youtube.com/watch?v=jG_UJ0wo-6I",
    },
    {
    	"highlight": false,
        "title": "URL TV's Own Kay-Shine x T-Rex on Funk Flex | #Freestyle052",
        "url": "https://www.youtube.com/watch?v=fTw_xMjNOvE",
    },
    {
    	"highlight": false,
        "title": "Ms. Hustle Bars on I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=Apd6NCfHEqg",
    },
    {
    	"highlight": false,
        "title": "Ms. Hustle Freestyle on Sway In The Morning",
        "url": "https://www.youtube.com/watch?v=QFdCqqVqLvs",
    },
    {
    	"highlight": false,
        "title": "Ms. Hustle Freestyles on SHADE 45 w/ Legendary DJ KAY SLAY",
        "url": "https://www.youtube.com/watch?v=BW3Hc3cV54o",
    },
    {
    	"highlight": false,
        "title": "TIERRA WHACK | Funk Flex | #Freestyle115 - YouTube",
        "url": "https://www.youtube.com/watch?v=dKZFTANTCYA",
    },
    {
    	"highlight": false,
        "title": "Jae Millz | Funk Flex | #Freestyle114",
        "url": "https://www.youtube.com/watch?v=KRXhnfDdaW0",
    },
    {
    	"highlight": false,
        "title": "Arsonal | Funk Flex | #Freestyle116",
        "url": "https://www.youtube.com/watch?v=1rHhpety6XQ",
    },
    {
    	"highlight": false,
        "title": "Chris Webby freestyle on Sway in the morning 2018",
        "url": "https://www.youtube.com/watch?v=1JvAlILvjt8",
    },
    {
    	"highlight": false,
        "title": "A-BOOGIE | FUNK FLEX | #Freestyle120",
        "url": "https://www.youtube.com/watch?v=Xa9EirBdBsg",
    },
    {
    	"highlight": false,
        "title": "CHARLIE CLIPS | FUNK FLEX | #Freestyle119",
        "url": "https://www.youtube.com/watch?v=cbGqaclL9GY",
    },
    {
    	"highlight": false,
        "title": "DNA Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=olkkSlitGDU",
    },
    {
    	"highlight": false,
        "title": "Vic Mensa Freestyle w/ The L.A. Leakers - Freestyle #067",
        "url": "https://www.youtube.com/watch?v=GcUkwzsRtpQ",
    },
    {
    	"highlight": false,
        "title": "Cozz Freestyle w/ The L.A. Leakers - Freestyle #038",
        "url": "https://www.youtube.com/watch?v=DnJuF7YZjSE",
    },
    {
    	"highlight": false,
        "title": "Only One QB Freestyles on Bars On I-95",
        "url": "https://www.youtube.com/watch?v=YzWaoc5cbcE",
    },
    {
    	"highlight": false,
        "title": "POPPERAZZI PO Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=JeMWElR4BQg",
    },
    {
    	"highlight": false,
        "title": "Mone Corleone on Flex | Freestyle #035",
        "url": "https://www.youtube.com/watch?v=rAAqgoUNf3c",
    },
    {
    	"highlight": false,
        "title": "RAIN 910 Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=BabZXXvx5IE",
    },
    {
    	"highlight": false,
        "title": "Albee Al Freestyle w/ The L.A. Leakers - Freestyle #061",
        "url": "https://www.youtube.com/watch?v=WQLdELIGqV8",
    },
    {
    	"highlight": false,
        "title": "Albee Al Freestyle on Flex | Freestyle #012",
        "url": "https://www.youtube.com/watch?v=BStk1lWZpoI",
    },
    {
    	"highlight": false,
        "title": "Boogie Freestyle w/ The L.A. Leakers - Freestyle #068",
        "url": "https://www.youtube.com/watch?v=HNQ1IFP98Z8",
    },
    {
    	"highlight": false,
        "title": "Cashflow Harlem Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=a9jW1-w0W5w",
    },
    {
    	"highlight": false,
        "title": "Kyah Baby Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=856fmrmsvVQ",
    },
    {
    	"highlight": false,
        "title": "Pretty Savage Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=q93nsHM_BSQ",
    },
    {
    	"highlight": false,
        "title": "Murda Mook Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=DILV1_5gibc",
    },
    {
    	"highlight": false,
        "title": "Deetranada Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=Um3WJFYZPXg",
    },
    {
    	"highlight": false,
        "title": "Verbosity Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=ABRgXUwxH1Y",
    },
    {
    	"highlight": false,
        "title": "Young Devyn Bars On I-95 Freestyle pt 2",
        "url": "https://www.youtube.com/watch?v=5kLx00lKLOk",
    },
    {
    	"highlight": false,
        "title": "Showly Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=iuXIrMIRKWY",
    },
    {
    	"highlight": false,
        "title": "Dave East freestyle! GOES HARD!! Tribute to Nipsey. Westwood",
        "url": "https://www.youtube.com/watch?v=CveuSd5NSYI",
    },
    {
    	"highlight": false,
        "title": "DA BABY | FUNK FLEX | #Freestyle123",
        "url": "https://www.youtube.com/watch?v=_Q1PYCoMNEg",
    },
    {
    	"highlight": false,
        "title": "DaBaby, Megan Thee Stallion, YK Osiris and Lil Mosey's 2019 XXL Freshman Cypher",
        "url": "https://www.youtube.com/watch?v=f032Q6cMqco",
    },
    {
    	"highlight": false,
        "title": "Blueface, YBN Cordae and Rico Nasty's 2019 XXL Freshman Cypher",
        "url": "https://www.youtube.com/watch?v=1OxiVc9aUcE",
    },
    {
    	"highlight": false,
        "title": "Roddy Ricch, Comethazine and Tierra Whack's 2019 XXL Freshman Cypher",
        "url": "https://www.youtube.com/watch?v=yt7KtzjOXe4",
    },
    {
    	"highlight": false,
        "title": "Cantrell Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=xJRh8G84PYM",
    },
    {
    	"highlight": false,
        "title": "TSU Surf Freestyle w/ The L.A. Leakers - Freestyle #072",
        "url": "https://www.youtube.com/watch?v=AfHB58U-eQY",
    },
    {
    	"highlight": false,
        "title": "Anoyd Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=hGV9derk9bk",
    },
    {
    	"highlight": false,
        "title": "Juice WRLD | Funk Flex | #Freestyle133",
        "url": "https://www.youtube.com/watch?v=t-kwJJl3hB0",
    },
    {
    	"highlight": false,
        "title": "YOUNG M.A | FUNK FLEX | #Freestyle132",
        "url": "https://www.youtube.com/watch?v=3DxPnr48fKc",
    },
    {
    	"highlight": false,
        "title": "BIG SEAN | FUNK FLEX | #Freestyle131",
        "url": "https://www.youtube.com/watch?v=dAl8qGIrcSI",
    },
    {
    	"highlight": false,
        "title": "Lil Dicky Freestyle on Sway In The Morning | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=CzgjglZqS3Y",
    },
    {
    	"highlight": false,
        "title": "Bars On I-95 The Cypher Tour Virginia",
        "url": "https://www.youtube.com/watch?v=N8rha7LJLMo",
    },
    {
    	"highlight": false,
        "title": "Cory Gunz Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=OeE_-bti0ZU",
    },
    {
    	"highlight": false,
        "title": "DNA | Funk Flex | #Freestyle134",
        "url": "https://www.youtube.com/watch?v=6_-B1K8mI00",
    },
    {
    	"highlight": false,
        "title": "A Boogie + Don Q Freestyle on Flex | Freestyle #005",
        "url": "https://www.youtube.com/watch?v=Sr78XYSPzlk",
    },
    {
    	"highlight": false,
        "title": "Friday Fire Cypher: TR3 & Bones Brigante Freestyle Over Supah Mario Beats | Sway's Universe",
        "url": "https://www.youtube.com/watch?v=48BhGFkATwQ",
    },
    {
    	"highlight": false,
        "title": "Grafh Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=Rm2Fo4wKTag",
    },
    {
    	"highlight": false,
        "title": "MEEK MILL | FUNK FLEX | #Freestyle118",
        "url": "https://www.youtube.com/watch?v=LjCi2dv8l5M",
    },
    {
    	"highlight": false,
        "title": "DAVE EAST | FUNK FLEX | #Freestyle136",
        "url": "https://www.youtube.com/watch?v=9pup4-rTcnE",
    },
    {
    	"highlight": false,
        "title": "Mickey Factz Bars On I-95 Freestyle PT 1",
        "url": "https://www.youtube.com/watch?v=elFg7yxpR0c",
    },
    {
    	"highlight": false,
        "title": "Mickey Factz Bars On I-95 Freestyle Pt 2",
        "url": "https://www.youtube.com/watch?v=9beSq5O2Dh8",
    },
    {
    	"highlight": false,
        "title": "Mickey Factz' Message to Kanye West and Slams the 5 Fingers of Death | Sway's Universe",
        "url": "https://www.youtube.com/watch?v=cT_Jtlei7rQ",
    },
    {
    	"highlight": false,
        "title": "Action Bronson Freestyles on FunkMaster Flex",
        "url": "https://www.youtube.com/watch?v=UYfEpSgbfNE",
    },
    {
    	"highlight": false,
        "title": "ACTION BRONSON FREESTYLES ON FLEX | #FREESTYLE065",
        "url": "https://www.youtube.com/watch?v=DI0DtYEOJnE",
    },
    {
    	"highlight": false,
        "title": "King Los Freestyle W/ The L.A. Leakers - Freestyle #095",
        "url": "https://www.youtube.com/watch?v=SLwXCDRuIyw",
    },
    {
    	"highlight": false,
        "title": "Griselda & BSF Freestyle w/ The L.A. Leakers - Freestyle #090",
        "url": "https://www.youtube.com/watch?v=zHc0HEhVRAQ",
    },
    {
    	"highlight": false,
        "title": "BARS - Young Zay Freestyle",
        "url": "https://www.youtube.com/watch?v=pgnk8-QMmqE",
    },
    {
    	"highlight": false,
        "title": "DaBaby Freestyle w/ The L.A. Leakers - Freestyle #076",
        "url": "https://www.youtube.com/watch?v=l9azLSs5Bac",
    },
    {
    	"highlight": false,
        "title": "Showly BET freestyle",
        "url": "https://www.youtube.com/watch?v=8vvZoygvtY4",
    },
    {
    	"highlight": false,
        "title": "Locksmith Drops off a Fire Freestyle + Fat Joe Calls Him the Best | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=Adno-CS2T0M",
    },
    {
    	"highlight": false,
        "title": "JUICE WRLD | FUNK FLEX | #Freestyle127",
        "url": "https://www.youtube.com/watch?v=WTDuXSyINLo",
    },
    {
    	"highlight": false,
        "title": "MoneyBagg Yo | FUNK FLEX | #Freestyle126",
        "url": "https://www.youtube.com/watch?v=7C6q54PC9Ic",
    },
    {
    	"highlight": false,
        "title": "Stunna 4 Vegas | FUNK FLEX | #Freestyle125",
        "url": "https://www.youtube.com/watch?v=bD90oc7mAdE",
    },
    {
    	"highlight": false,
        "title": "GOODZ DA ANIMAL | FUNK FLEX | #Freestyle124",
        "url": "https://www.youtube.com/watch?v=yznn_BzLS2U",
    },
    {
    	"highlight": false,
        "title": "ANDERSON. PAAK | FUNK FLEX | #Freestyle122",
        "url": "https://www.youtube.com/watch?v=-iEmP6qSsSE",
    },
    {
    	"highlight": false,
        "title": "POLO G | FUNK FLEX | #Freestyle132",
        "url": "https://www.youtube.com/watch?v=SeUfoeBjImA",
    },
    {
    	"highlight": false,
        "title": "RAPSODY | FUNK FLEX | #Freestyle137",
        "url": "https://www.youtube.com/watch?v=0_sy7H1E4rU",
    },
    {
    	"highlight": false,
        "title": "ARSONAL DA REBEL | FUNK FLEX | #Freestyle139",
        "url": "https://www.youtube.com/watch?v=2T-QgwHDaT0",
    },
    {
    	"highlight": false,
        "title": "MARLON CRAFT | FUNK FLEX | #Freestyle140",
        "url": "https://www.youtube.com/watch?v=aNPEEsEHepg",
    },
    {
    	"highlight": false,
        "title": "MONEYBAGG YO FREESTYLES ON FLEX | #FREESTYLE64",
        "url": "https://www.youtube.com/watch?v=p0aIalKDAHA",
    },
    {
    	"highlight": false,
        "title": "Tyler The Creator | FUNK FLEX | #Freestyle128",
        "url": "https://www.youtube.com/watch?v=fmmS5PE2RFY",
    },
    {
    	"highlight": false,
        "title": "G Herbo & Dave East's 2016 XXL Freshmen Cypher",
        "url": "https://www.youtube.com/watch?v=aZHZDS2QkBo",
    },
    {
    	"highlight": false,
        "title": "The Game Freestyles over \"Old Town Road\", \"Go Loko\", Tupac's \"Can't C Me\" & More",
        "url": "https://www.youtube.com/watch?v=dXyDgMsINsg",
    },
    {
    	"highlight": false,
        "title": "Old Man Saxon Freestyle | Bootleg Kev & DJ Hed",
        "url": "https://www.youtube.com/watch?v=xT_r9997_u8",
    },
    {
    	"highlight": false,
        "title": "Juice WRLD - Fire In The Booth",
        "url": "https://www.youtube.com/watch?v=TGb4PEZ6HEE",
    },
    {
    	"highlight": false,
        "title": "DaiDough Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=R3cBbsNDiAo",
    },
    {
    	"highlight": false,
        "title": "Tee Grizzley - Fire In The Booth pt1",
        "url": "https://www.youtube.com/watch?v=0a6Og7Vzh-I",
    },
    {
    	"highlight": false,
        "title": "Lupe Fiasco Freestyle on Sway In The Morning | Sway's Universe",
        "url": "https://www.youtube.com/watch?v=fQNUVdYIU1s",
    },
    {
    	"highlight": false,
        "title": "The Hot Seat: Lil Dicky Freestyle [Exclusive Video]",
        "url": "https://www.youtube.com/watch?v=BKxgfLImycw",
    },
    {
    	"highlight": false,
        "title": "Dash Flash Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=2_uCkyUcRfk",
    },
    {
    	"highlight": false,
        "title": "MGK - Fire In The Booth",
        "url": "https://www.youtube.com/watch?v=iUeXD0dBzaM",
    },
    {
    	"highlight": false,
        "title": "Token Raps on Sway in the Morning over 50 Cent Beats",
        "url": "https://www.youtube.com/watch?v=xA1Rj34-UmA",
    },
    {
    	"highlight": false,
        "title": "Token - Fire In The Booth (part 1)",
        "url": "https://www.youtube.com/watch?v=-SVsRMwlz-8",
    },
    {
    	"highlight": false,
        "title": "Lady Luck Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=gY4GTZDjqB0",
    },
    {
    	"highlight": false,
        "title": "FIVIO FOREIGN | FUNK FLEX | #Freestyle141",
        "url": "https://www.youtube.com/watch?v=k9IhGPc-_fQ",
    },
    {
    	"highlight": false,
        "title": "Daylyt Freestyle w/ The L.A. Leakers - Freestyle #074",
        "url": "https://www.youtube.com/watch?v=ZvAArR14fno",
    },
    {
    	"highlight": false,
        "title": "Calboy - Fire In The Booth",
        "url": "https://www.youtube.com/watch?v=88dgmdkqF04",
    },
    {
    	"highlight": false,
        "title": "Stalley Freestyles + Talks Being Independent, Spiritual Evolution & New Project | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=6VibyTekDJ4&t=1898s",
    },
    {
    	"highlight": false,
        "title": "22GZ | FUNK FLEX | #Freestyle142",
        "url": "https://www.youtube.com/watch?v=bUVBGm-OgYc",
    },
    {
    	"highlight": false,
        "title": "Boogie Freestyles on Sway In The Morning | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=oc5mW4GzeFA",
    },
    {
    	"highlight": false,
        "title": "AhDi Boom Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=0E69E2Nflp4",
    },
    {
    	"highlight": false,
        "title": "Chess Bars On I-95 Freestyle pt.2 W/ J Quest and Rambo",
        "url": "https://www.youtube.com/watch?v=lQsxr4PDUJk",
    },
    {
    	"highlight": false,
        "title": "Shoota Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=qyzVe61BFws",
    },
    {
    	"highlight": false,
        "title": "Friday Fire Cypher: J Quest and Veto Corli Trade Bars Over Ron Browz Beats | Sway's Universe",
        "url": "https://www.youtube.com/watch?v=E1CyLMQUO_4",
    },
    {
    	"highlight": false,
        "title": "Oswin Benjamin Has The Best Freestyle Of The Year as He Murders 9 Beats for 10 Minutes",
        "url": "https://www.youtube.com/watch?v=i8c9r4bDdxk",
    },
    {
    	"highlight": false,
        "title": "JQuest On The Independent Grind and Freestyles on a Ron Browz Beat | Sway's Universe",
        "url": "https://www.youtube.com/watch?v=KHOqhx8ipDo",
    },
    {
    	"highlight": false,
        "title": "D Smoke Freestyle on Sway In The Morning | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=-FM7UHWbwAs",
    },
    {
    	"highlight": false,
        "title": "Consequence and 8-Year Old Son Caiden Drop Bars on Sway In The Morning | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=ZJzhn7ELlDY",
    },
    {
    	"highlight": false,
        "title": "Griselda - Fire In The Booth",
        "url": "https://www.youtube.com/watch?v=X_h3T_UgH5Q",
    },
    {
    	"highlight": false,
        "title": "Reason Freestyle | Bootleg Kev & DJ Hed",
        "url": "https://www.youtube.com/watch?v=e4DwxK_sKuA",
    },
    {
    	"highlight": false,
        "title": "Neek Bucks Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=u5znDzWQxko",
    },
    {
    	"highlight": false,
        "title": "Royce Da 5'9\" Freestyle W/ The L.A. Leakers - Freestyle #100",
        "url": "https://www.youtube.com/watch?v=XXi629ypSwY",
    },
    {
    	"highlight": false,
        "title": "SHOOTA FREESTYLES AT SHADE45 WITH DJ KAYSLAYSHOW",
        "url": "https://www.youtube.com/watch?v=FQsSoGJMA78",
    },
    {
    	"highlight": false,
        "title": "Toney Blanco & T Sawyer Bars On I-95 V4V",
        "url": "https://www.youtube.com/watch?v=LegEiMcZgXQ",
    },
    {
    	"highlight": false,
        "title": "QUILLY FREESTYLE ON FLEX | #FREESTYLE062",
        "url": "https://www.youtube.com/watch?v=JXhhEVffEOc",
    },
    {
    	"highlight": false,
        "title": "WE$TSIDE PARLÉ Freestyle With The L.A. Leakers - Freestyle #032",
        "url": "https://www.youtube.com/watch?v=0qA-TcOPDD8",
    },
    {
    	"highlight": false,
        "title": "Lil Flip Freestyle With The L.A. Leakers | #Freestyle029",
        "url": "https://www.youtube.com/watch?v=wN___GzpC78",
    },
    {
    	"highlight": false,
        "title": "Quincey White Freestyle With The L A Leakers Freestyle #027",
        "url": "https://www.youtube.com/watch?v=DJdUs6KiUs8",
    },
    {
    	"highlight": false,
        "title": "Handlez McGee RAISES the BAR with INSANE Wordplay! | #HighOffLife Freestyle 053",
        "url": "https://www.youtube.com/watch?v=8x_JYlW6234",
    },
    {
    	"highlight": false,
        "title": "4ize RAISES the BAR HIGH! | #HighOffLife Freestyle 019",
        "url": "https://www.youtube.com/watch?v=j3oJSdLl2zA",
    },
    {
    	"highlight": false,
        "title": "Paris Roze SNAPS on YOUNG GUNZ Beat | #HighOffLife Freestyle 001",
        "url": "https://www.youtube.com/watch?v=jWMa8YGWeSA",
    },
    {
    	"highlight": false,
        "title": "Big Brown PROVES Alabama Has SPITTERS | #HighOffLife Freestyle 003",
        "url": "https://www.youtube.com/watch?v=RSOGk9J2dsE",
    },
    {
    	"highlight": false,
        "title": "Headkrack GOES OFF on OOCHIE WALLY Beat | #HighOffLife Freestyle 006",
        "url": "https://www.youtube.com/watch?v=iDIEyHwvF4I",
    },
    {
    	"highlight": false,
        "title": "Black Deniro Drops BARS On A PHILLY Classic! | High Off Life Freestyle #049",
        "url": "https://www.youtube.com/watch?v=jzJK6l3y3io",
    },
    {
    	"highlight": false,
        "title": "Rain910 Spits One of the HARDEST VERSES of the YEAR | #HighOffLife Freestyle 013",
        "url": "https://www.youtube.com/watch?v=JtUxpriQwzM",
    },
    {
    	"highlight": false,
        "title": "D. Horton Delivers POWERFUL Performance | #HighOffLife Freestyle 008",
        "url": "https://www.youtube.com/watch?v=uoYnyL09JOE",
    },
    {
    	"highlight": false,
        "title": "CIVIL WRITES: Real Rap From ATLANTA ! | #HighOffLife Freestyle 024",
        "url": "https://www.youtube.com/watch?v=DhvVdZSnwXw",
    },
    {
    	"highlight": false,
        "title": "DRECT aka WAVY DAVY Silences Mumble Rap on DRAKE & LIL BABY Beat! | #HighOffLife Freestyle 030",
        "url": "https://www.youtube.com/watch?v=SXU551jfi3w",
    },
    {
    	"highlight": false,
        "title": "Bizzy Banks Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=gyYC5lL51Qk",
    },
    {
    	"highlight": false,
        "title": "JIGGS Kicks BARS on a DR DRE Classic! | #HighOffLife Freestyle 034",
        "url": "https://www.youtube.com/watch?v=1QsuHpi2qBo",
    },
    {
    	"highlight": false,
        "title": "GRAFH Freestyle With The L.A. Leakers - Freestyle #033",
        "url": "https://www.youtube.com/watch?v=NTVZCtpW1uo",
    },
    {
    	"highlight": false,
        "title": "DAVANTE LIV3 Blacks Out on Erykah Badu' Beat!! | #HighOffLife Freestyle 016",
        "url": "https://www.youtube.com/watch?v=tciX47SwfO4",
    },
    {
    	"highlight": false,
        "title": "Axel Leon Freestyle With The LA Leakers | #Freestyle023",
        "url": "https://www.youtube.com/watch?v=bhvr4x48AtA",
    },
    {
    	"highlight": false,
        "title": "OREN MAJOR Tells A STORY About His FATHER! | #HighOffLife Freestyle 028",
        "url": "https://www.youtube.com/watch?v=IXVGHjvrGjg",
    },
    {
    	"highlight": false,
        "title": "MARCOTIKS: The BEST PRODUCER Turned RAPPER!? | #HighOffLife Freestyle 025",
        "url": "https://www.youtube.com/watch?v=zCZTsjLFQ1k",
    },
    {
    	"highlight": false,
        "title": "Naj Murph BARS OUT on BIG PUN' Classic | #HighOffLife Freestyle 012",
        "url": "https://www.youtube.com/watch?v=_6GW4d24bKE",
    },
    {
    	"highlight": false,
        "title": "J.I.D. FREESTYLES ON FLEX | #FREESTYLE056",
        "url": "https://www.youtube.com/watch?v=3sUmjpp13bI",
    },
    {
    	"highlight": false,
        "title": "OT The Real Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=w49iVPU6fz0",
    },
    {
    	"highlight": false,
        "title": "B. RUSS SNAPS on an OUTKAST Classic! | #HighOffLife Freestyle 023",
        "url": "https://www.youtube.com/watch?v=A28CQThM5YA",
    },
    {
    	"highlight": false,
        "title": "ALLIE BABY Represents For NEW ORLEANS! | High Off Life Freestyle #044",
        "url": "https://www.youtube.com/watch?v=ah2EQpkmrtI",
    },
    {
    	"highlight": false,
        "title": "Dave East and Bexey Trade Bars on Sway In The Morning | SWAY’S UNIVERSE",
        "url": "https://www.youtube.com/watch?v=5kQCKlHwxYo",
    },
    {
    	"highlight": false,
        "title": "Cruch Calhoun Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=S6_r9ywzsIUb",
    },
    {
    	"highlight": false,
        "title": "Ron Browz x TJ Brown Bars On I-95",
        "url": "https://www.youtube.com/watch?v=X5okn8fLSWI&t=2310s",
    },
    {
    	"highlight": false,
        "title": "Millyz Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=FZoNu30pVOI",
    },
    {
    	"highlight": true,
        "title": "J Nolan LYRICAL EXERCISE on BUSTA RHYMES Beat | #HighOffLife Freestyle 009",
        "url": "https://www.youtube.com/watch?v=OPR81gMSdps",
    },
    {
    	"highlight": true,
        "title": "Santos Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=Pns_l65nJT8",
    },
    {
    	"highlight": true,
        "title": "Supastition GOES CRAZY on a J DILLA Beat! | High Off Life Freestyle #039",
        "url": "https://www.youtube.com/watch?v=ZhjUoIr3epI",
    },
    {
    	"highlight": true,
        "title": "Tavaras Amir Reps ATL on OUTKAST Classic | #HighOffLife Freestyle 007",
        "url": "https://www.youtube.com/watch?v=KmPMenM3rJw",
    },
    {
    	"highlight": true,
        "title": "Lola Brooke Quarantine Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=oKQQu5q1F5w",
    },
    {
    	"highlight": true,
        "title": "Anoyd | Block Work | FunkFlexBlockWork0009",
        "url": "https://www.youtube.com/watch?v=6unPEXcA4p0",
    },
    {
    	"highlight": true,
        "title": "KP Bars On I-95 Freestyle",
        "url": "https://www.youtube.com/watch?v=oXdN50frBhs",
    },
    {
    	"highlight": true,
        "title": "070 Phi Bars On I-95 Freestyle pt 2",
        "url": "https://www.youtube.com/watch?v=dY4of0kNZYM",
    }
];

class Freestyles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };
    }

    makeLinks(term) {
        var caseInsensitiveIndexOf = function(big, little) {
            return big.toLowerCase().indexOf(little.toLowerCase());
        };

        return freestyles.map(freestyle => {
            if (caseInsensitiveIndexOf(freestyle.title, term) >= 0) {
                if (freestyle.highlight) {
                    return (<p class="highlight"><a href={freestyle.url}>{freestyle.title}</a></p>)
                } else {
                    return (<p><a href={freestyle.url}>{freestyle.title}</a></p>)
                }
            }
        })
    }

    filterList = (event) => {
        let value = event.target.value;
        this.setState({term: value});
    }

    render() {
        const sorted = freestyles.sort(function (a, b) {
			return b.highlight - a.highlight;
        });
        
        return (
            <div>
                <input type="text" placeholder="Search" onChange={this.filterList} /><br /><br />
                {this.makeLinks(this.state.term)}
            </div>
        );
    }
};

export default Freestyles;