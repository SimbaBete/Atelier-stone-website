// Each entry is one sculpture ("piece"). "images" lists every photo of that
// piece -- the first image is the cover shown in the grid; clicking through
// the lightbox cycles through the rest. Edit titles, materials, dimensions,
// sculptor, and prices below to match your actual works.
const WORKS = [

  { title: "Floral Crown II", material: "Springstone", dims: "30x17x13 inches", sculptor: "David White", price: "$2,500", buyButtonId: "1786580439229"
    images: ["images/613CDA71-2588-48AE-9955-69531AB9872C_1_105_c.jpeg", "images/IMG_2773.jpg", "images/IMG_2768.jpg", "images/IMG_2772.jpg", "images/29CB069A-A9EB-4085-8C7D-6911CFFE86B1.jpeg", "images/65BA2890-1D06-46E9-B834-9894B2502035_1_105_c.jpeg", "images/IMG_2839.jpg", "images/IMG_2829.jpg", "images/IMG_2828.jpg"] },

  { title: "Reverie", material: "Springstone", dims: "22x18x8 inches", sculptor: "Godfrey Matangira", price: "$5,500",
    images: ["images/9E883B4D-0AD9-49F0-A6BD-2A5559F9A551.jpeg", "images/IMG_2669.jpg", "images/71210B2A-6D72-4C1A-959C-B1B71BAF7E1A.jpeg", "images/FB2764F8-0C78-4D5C-BFAF-FD4EF8B54BF1_1_105_c.jpeg", "images/B69F1FE1-418A-4827-8551-2AD15CF5CA16.jpeg"] },

  { title: "Human Study I", material: "Springstone", dims: "21x12x12 inches", sculptor: "Farai Tandi ne Tigere", price: "$2,500",
    images: ["images/C51E8866-AB12-498E-BF73-59CE074490BF_1_105_c.jpeg", "images/5B550455-DC8D-4A33-A3BC-2C69A810D9C5_1_105_c.jpeg", "images/18AE9BEC-9C74-47A7-A330-5B4A42995923_1_105_c.jpeg", "images/5A6832BF-3F1A-41A8-8E21-23D83E9B6B49_1_102_o.jpeg"] },

  { title: "Priestess", material: "Butter Jade Stone", dims: "12x7x6 inches", sculptor: "Lovemore Mangenda", price: "$500 - SOLD",
    images: ["images/1CA9BAB9-049F-4F5B-80E4-461E24A9DD12_1_105_c.jpeg", "images/227E7894-7A11-4CA8-8E76-F48ADBAE3E04_1_105_c.jpeg", "images/363FB187-0D2E-4C1E-A232-1E1FD38D60D1_1_102_a.jpeg", "images/62F6F604-B250-4152-9675-4C6F26B29D9E_1_102_a.jpeg", "images/F1151CFA-48F8-4270-972C-94415BCECC72_1_105_c.jpeg"] },

  { title: "Venus", material: "Agate Stone", dims: "17x10x8 inches", sculptor: "Chenjerai Chiripanyanga", price: "$1,500",
    images: ["images/44CA7786-8A3E-4924-91F2-378BBECE07FF_1_105_c.jpeg", "images/IMG_2663.jpg", "images/84B1F1EA-191B-4265-AD45-CBC81A80B5A2_1_105_c.jpeg", "images/BB2EFB74-EFBF-41E3-8E37-DF61258C19CF.jpeg"] },

  { title: "Lust", material: "Red Jasper Stone", dims: "24x13x10 inches", sculptor: "Stewart Nyahungwa", price: "$2,500",
    images: ["images/4D53782D-D9D7-4CEB-93A7-80A5061FE461_1_105_c.jpeg", "images/895AE2DB-A980-4B1A-8E01-331E0B72E101_1_105_c.jpeg", "images/A439B6E4-1C7D-4416-8A94-A65B74D36EE8_1_105_c.jpeg", "images/C5B6BBD9-22FD-4B81-BFB8-329FFF829C30.jpeg"] },

  { title: "Torso Study I", material: "Black Serpentine Stone", dims: "11x7x5 inches", sculptor: "Sydney Majengwa", price: "$500",
    images: ["images/DCAC6986-63ED-4A7C-9FA7-AFD8AAD2FDFD_1_105_c.jpeg", "images/2FE2F38A-4190-4FF5-A4F0-1CF7DD989F33_1_105_c.jpeg", "images/FB3B7DD1-6BFF-44AB-B63C-6A0C12F4A23C_1_105_c.jpeg"] },

  { title: "Sway", material: "Red Jasper Stone", dims: "20X10X7 inches", sculptor: "Stewart Nyahungwa", price: "$1,200 - SOLD",
    images: ["images/1786306100681_A038B70C-C1C0-47D8-A699-A0B4616C7532_1_105_c.jpeg", "images/1786306100681_4099ED28-3802-48E8-BFC3-D566B7E4C025_1_105_c.jpeg", "images/1786306100682_098A9DB1-CD47-4591-AB66-611D8B24BC97_1_105_c.jpeg", "images/1786306100682_3EC443DA-D905-427F-8F25-B8E3D67167C4_1_105_c.jpeg", "images/1786306100682_443FD9F0-B3DB-490F-A18A-6749F0579E1E_1_105_c.jpeg", "images/1786306100682_93573C84-1C90-4091-A165-E1C201B9165F_1_105_c.jpeg", "images/1786306100682_CD2FB8D6-025A-44A7-A0C1-D4569A8960D6_1_105_c.jpeg"] },

  { title: "Her", material: "Springstone", dims: "20x10x7 inches", sculptor: "Stewart Nyahungwa", price: "$1,200 - SOLD",
    images: ["images/ACC90244-2F20-47B0-8099-45D873DC36B8_1_105_c.jpeg", "images/0BEED373-ACC8-45B1-A82A-06DB97480144_1_105_c.jpeg", "images/35A513BF-9273-4120-9B55-487CC1C702A9_1_105_c.jpeg", "images/FECF7A6C-3397-489F-8E9E-7A13B2C62F7B_1_105_c.jpeg"] },

  { title: "Petite Figure Study", material: "Rose Agate Stone", dims: "7x4x4 inches", sculptor: "Stewart Nyahungwa", price: "$175",
    images: ["images/IMG_2857.jpg", "images/IMG_2862.jpg", "images/IMG_2865.jpg", "images/IMG_2868.jpg", "images/IMG_2871.jpg"] },

  { title: "Standing Figure I", material: "Springstone", dims: "11x4x2 inches", sculptor: "", price: "$175",
    images: ["images/IMG_2924.jpg", "images/IMG_2926.jpg", "images/IMG_2927.jpg", "images/IMG_2928.jpg"] },

  { title: "Family Group I", material: "Springstone", dims: "6x4x4 inches", sculptor: "", price: "$175",
    images: ["images/IMG_2935.jpg", "images/IMG_2936.jpg", "images/IMG_2937.jpg"] },

  { title: "Constellation I", material: "Cobalt Stone", dims: "21x17x13 inches", sculptor: "Themba Nyanhemwa", price: "$1,500",
    images: ["images/A46D977E-9F05-4681-B36B-5E1800E7BA81.jpeg", "images/BD955970-7AEF-4F46-A9B9-D43DD556D476.jpeg", "images/IMG_2834.jpg", "images/39E7D0AD-45C1-4DAD-A0CD-3D3A44A3A0FE.jpeg"] },

  { title: "Together I", material: "Springstone", dims: "31x10x4 inches", sculptor: "Shingi Madzongwe", price: "$1,500",
    images: ["images/IMG_2684.jpg", "images/IMG_2676.jpg", "images/A70DFDE1-134A-40A2-B29B-9E97C5DE2184_1_105_c.jpeg"] },

  { title: "Together VI", material: "Springstone", dims: "37x11x4 inches", sculptor: "Shingi Madzongwe", price: "",
    images: ["images/IMG_2699.jpg", "images/IMG_2692.jpg", "images/IMG_2695.jpg", "images/IMG_2688.jpg"] },

  { title: "Crashing Waves", material: "Leopard Stone", dims: "47x24x13 inches", sculptor: "Everson Nyamatsoka", price: "$7,500",
    images: ["images/0A1116B2-A8A6-4EF1-AD50-DC05AC6D39A3.jpeg"] },

  { title: "Wonder", material: "Springstone", dims: "30x20x16 inches", sculptor: "Takawira Taruvinga", price: "$5,000",
    images: ["images/B3DC6EC2-56CC-48E1-A063-6F789D962DC2_1_105_c.jpeg", "images/IMG_2654.jpg", "images/6B79DDF3-E947-49B0-9046-039ABA1D6758.jpeg", "images/3F63D1E6-BD83-4F7E-A253-E06793A99103.jpeg"] },

  { title: "Ascension", material: "White Dolomite Stone", dims: "58x30x13 inches", sculptor: "Stuart Chapenga", price: "$7,500",
    images: ["images/BCDFCF3B-992A-45B8-8293-746BDCAF67A4.jpeg", "images/IMG_2659.jpg"] },

  { title: "Tower", material: "Springstone", dims: "56x13x8 inches", sculptor: "Agnes Mupariwa", price: "$5,000",
    images: ["images/A8BA651C-B4F6-4965-90AD-F61F91F7796C_1_105_c.jpeg", "images/120D4E5C-2D6B-44FD-9AB3-198943BBD350_1_105_c.jpeg", "images/BBB486B5-0ACA-4305-A7E5-2C52B786125C_1_105_c.jpeg", "images/6B604719-D994-4D58-B64D-4A61A2B0D672_1_105_c.jpeg"] },

  { title: "Unending I", material: "Springstone", dims: "28x22x13 inches", sculptor: "Agnes Mupariwa", price: "$2,500",
    images: ["images/3F503327-E0EE-4B33-A850-8040D359A31A.jpeg", "images/01EBD498-E975-4A9E-AA93-6987A449B352_1_105_c.jpeg", "images/464E0AC5-01A3-45D6-844C-92EB3D9010D9_1_105_c.jpeg", "images/FF35E912-92B4-4437-8428-38B6A77A92E1.jpeg", "images/7372DEA6-6C58-4E3A-9F4B-55588EBBB4E1_1_105_c.jpeg"] },

  { title: "Unending II", material: "Springstone", dims: "38x20x11 inches", sculptor: "Agnes Mupariwa", price: "$3,500",
    images: ["images/23B58109-187B-4D1D-BF32-37FEA629E880.jpeg", "images/651953FF-8E03-45F9-94E8-26D8AA39944F.jpeg", "images/BD09E390-2D3C-433A-A52A-4878F84BF91D_1_105_c.jpeg", "images/E0B3B90E-8EDA-4087-A603-49FE70AB1F48_1_105_c.jpeg"] },

  { title: "Equilibrium I", material: "Leopard Stone", dims: "21x12x7 inches", sculptor: "Addington Nyasoka", price: "$750",
    images: ["images/1786385695109_1CC231BC-03F2-4CE6-9549-B361750FF373.jpeg", "images/IMG_2752.jpg", "images/IMG_2753.jpg", "images/IMG_2757.jpg"] },

  { title: "Be Mine", material: "Springstone", dims: "13x11x7 inches", sculptor: "Takawira Taruvinga", price: "$500",
    images: ["images/F953C720-78E9-4CDB-9863-6025854A6103.jpeg", "images/IMG_2701.jpg", "images/D06EB0F8-BB2F-4E50-AA84-5BB5C4CCA75F_1_105_c.jpeg"] },

  { title: "Interlocking Forms I", material: "Springstone", dims: "9.5x8x4 inches", sculptor: "Takawira Taruvinga", price: "$750",
    images: ["images/IMG_2724.jpg", "images/IMG_2727.jpg", "images/IMG_2733.jpg", "images/IMG_2728.jpg"] },

  { title: "Gesture I", material: "Leopard Stone", dims: "20x16x10 inches", sculptor: "Addington Nyasoka", price: "$750",
    images: ["images/IMG_2716.jpg", "images/IMG_2715.jpg", "images/IMG_2709.jpg", "images/IMG_2712.jpg", "images/IMG_2721.jpg"] },

  { title: "Sentinel I", material: "Verdite stone", dims: "9x3x3 inches", sculptor: "", price: "$175",
    images: ["images/IMG_2800.jpg", "images/IMG_2801.jpg", "images/IMG_2802.jpg"] },

  { title: "Sentinel IV", material: "Verdite stone", dims: "5x10x4 inches", sculptor: "Farai Tandi", price: "$175",
    images: ["images/IMG_2803.jpg", "images/IMG_2808.jpg", "images/IMG_2840.jpg", "images/IMG_2844.jpg", "images/IMG_2812.jpg", "images/IMG_2811.jpg"] },

  { title: "Rhino Study VI", material: "Verdite stone", dims: "6x13x5 inches", sculptor: "Farai Tandi", price: "",
    images: ["images/IMG_2853.jpg", "images/IMG_2894.jpg", "images/IMG_2895.jpg"] },

  { title: "Hippo Study I", material: "Verdite Stone", dims: "4x8x5 inches", sculptor: "Farai Tandi", price: "$175",
    images: ["images/IMG_2909.jpg", "images/IMG_2911.jpg", "images/IMG_2914.jpg"] },

  { title: "Hippo Study IV", material: "Verdite stone", dims: "4x8x5 inches", sculptor: "Farai Tandi", price: "",
    images: ["images/IMG_2929.jpg", "images/IMG_2932.jpg", "images/IMG_2933.jpg"] },

  { title: "Elephant Study in Jade I", material: "Butter Jade Stone", dims: "6x10x4 inches", sculptor: "Farai Tandi", price: "$175",
    images: ["images/IMG_2899.jpg", "images/IMG_2904.jpg", "images/IMG_2906.jpg"] },

  { title: "Elephant Study in Green Verdite", material: "Verdite Stone", dims: "8x10x5 inches", sculptor: "Farai Tandi", price: "$250",
    images: ["images/IMG_2917.jpg", "images/IMG_2920.jpg", "images/IMG_2921.jpg", "images/IMG_2922.jpg", "images/IMG_2923.jpg"] },

  { title: "Elephant In Springstone", material: "Springstone", dims: "8x10x5 inches", sculptor: "Farai Tandi", price: "$250",
    images: ["images/IMG_2736.jpg", "images/IMG_2737.jpg", "images/IMG_2738.jpg", "images/IMG_2739.jpg"] },

  { title: "Elephant Study In Cobalt", material: "Cobalt Stone", dims: "9x6x2 inches", sculptor: "Farai Tandi", price: "$250",
    images: ["images/IMG_2740.jpg", "images/IMG_2741.jpg", "images/IMG_2742.jpg", "images/IMG_2743.jpg"] },

  { title: "Winged Form IX", material: "Butter Jade Stone", dims: "8x6x2 inches", sculptor: "", price: "$250",
    images: ["images/IMG_2962.jpg", "images/IMG_2963.jpg", "images/IMG_2964.jpg", "images/IMG_2965.jpg"] },

  { title: "Winged Form V", material: "Fruit Serpentine Stone", dims: "10x6x2 inches", sculptor: "", price: "",
    images: ["images/IMG_2958.jpg", "images/IMG_2959.jpg", "images/IMG_2960.jpg", "images/IMG_2961.jpg"] },

  { title: "Vessel Pair I", material: "Golden Opal Stone", dims: "Tan, 2.5 x 10.5 x 5.5 inches and 2.75 x 9.5 x 5.5 inches", sculptor: "Addington Nyasoka", price: "$250",
    images: ["images/IMG_2942.jpg", "images/IMG_2946.jpg", "images/IMG_2947.jpg"] },

  { title: "Vessel Pair II", material: "Green Opal Stone", dims: "2.5 x 10 x 5.25 inches and 2.5 x 7.5 x 5 inches", sculptor: "Addington Nyasoka", price: "$250",
    images: ["images/IMG_2949.jpg", "images/IMG_2950.jpg", "images/IMG_2953.jpg"] },

  { title: "Vessel Pair III", material: "White Opal Stone", dims: "2.75 x 11.5 x 6 inches and 2.5 x 9 x 5 inches", sculptor: "Addington Nyasoka", price: "$250",
    images: ["images/IMG_2993.jpg"] },

];
