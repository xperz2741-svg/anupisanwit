import { GameItem } from '../types/game';

export const GAME_ITEMS: GameItem[] = [
  // ==============================================================
  // หมวดที่ 1 สัตว์ (Animals) - 30 รายการ
  // ==============================================================
  {
    id: 'cat',
    name: 'แมว',
    englishName: 'Cat',
    category: 'animals',
    hint: 'สัตว์เลี้ยงตัวนุ่ม มีหนวด มีหาง ชอบร้องเหมียวๆ',
    funFact: 'แมวชอบนอนกลางวัน และมีสายตาที่มองเห็นในความมืดได้ดีมาก!',
    soundDescription: 'เหมียว เหมียว'
  },
  {
    id: 'dog',
    name: 'สุนัข',
    englishName: 'Dog',
    category: 'animals',
    hint: 'เพื่อนแสนซื่อสัตย์ ชอบกระดิกหางและเห่าโฮ่งๆ',
    funFact: 'สุนัขมีจมูกที่ดมกลิ่นได้เก่งกว่ามนุษย์หลายพันเท่าเลยนะ!',
    soundDescription: 'โฮ่ง โฮ่ง'
  },
  {
    id: 'elephant',
    name: 'ช้าง',
    englishName: 'Elephant',
    category: 'animals',
    hint: 'สัตว์ตัวใหญ่เบิ้ม มีงวงยาวและใบหูใหญ่เหมือนพัด',
    funFact: 'ช้างเป็นสัตว์บกที่มีขนาดใหญ่ที่สุดในโลก ใช้หูพัดเพื่อระบายความร้อน!',
    soundDescription: 'แป๋น แป๋น'
  },
  {
    id: 'rabbit',
    name: 'กระต่าย',
    englishName: 'Rabbit',
    category: 'animals',
    hint: 'ตัวนุ่มนิ่ม มีหูยาวสองข้าง ชอบกระโดดดึ๋งๆ และกินแครอท',
    funFact: 'กระต่ายกระโดดได้สูงมาก และมีฟันหน้าแข็งแรงไว้แทะพืชผัก!',
    soundDescription: 'ดึ๋ง ดึ๋ง'
  },
  {
    id: 'fish',
    name: 'ปลา',
    englishName: 'Fish',
    category: 'animals',
    hint: 'ว่ายน้ำเก่ง มีครีบและหาง มีเกล็ดแวววาว',
    funFact: 'ปลาหายใจด้วยเหงือกและไม่เคยหลับตาเพราะไม่มีเปลือกตา!',
    soundDescription: 'บุ๋ง บุ๋ง'
  },
  {
    id: 'bird',
    name: 'นก',
    englishName: 'Bird',
    category: 'animals',
    hint: 'มีปีกสองข้าง มีจะงอยปาก บินได้บนท้องฟ้า ชอบร้องจิ๊บๆ',
    funFact: 'นกมีกระดูกกลวงน้ำหนักเบา ทำให้บินบนท้องฟ้าได้อย่างคล่องแคล่ว!',
    soundDescription: 'จิ๊บ จิ๊บ'
  },
  {
    id: 'butterfly',
    name: 'ผีเสื้อ',
    englishName: 'Butterfly',
    category: 'animals',
    hint: 'แมลงแสนสวย มีปีกหลากสีสัน ชอบบินตอมเกสรดอกไม้',
    funFact: 'ผีเสื้อเคยเป็นหนอนผีเสื้อตัวน้อยในดักแด้มาก่อนที่จะกลายร่าง!',
    soundDescription: 'พึ่บพั่บ'
  },
  {
    id: 'turtle',
    name: 'เต่า',
    englishName: 'Turtle',
    category: 'animals',
    hint: 'เดินต้วมเตี้ยมช้าๆ มีกระดองแข็งไว้ป้องกันตัวเอง',
    funFact: 'เต่าสามารถหดหัวและขาเข้าไปในกระดองแข็งเพื่อความปลอดภัยได้!',
    soundDescription: 'ต้วมเตี้ยม'
  },
  {
    id: 'duck',
    name: 'เป็ด',
    englishName: 'Duck',
    category: 'animals',
    hint: 'มีปากแบน เท้ามีพังผืด ว่ายน้ำได้ ชอบร้องก้าบๆ',
    funFact: 'ขนของเป็ดมีน้ำมันเคลือบทำให้น้ำไม่เปียกขนเวลาลอยน้ำ!',
    soundDescription: 'ก้าบ ก้าบ'
  },
  {
    id: 'horse',
    name: 'ม้า',
    englishName: 'Horse',
    category: 'animals',
    hint: 'วิ่งเร็ว มีแผงคอสวยงาม วิ่งเสียงดังกับกับ',
    funFact: 'ม้าสามารถยืนนอนหลับได้โดยไม่ล้มเพราะมีข้อต่อขาที่พิเศษ!',
    soundDescription: 'ฮี้ๆ กับกับ'
  },
  {
    id: 'lion',
    name: 'สิงโต',
    englishName: 'Lion',
    category: 'animals',
    hint: 'เจ้าป่าผู้สง่างาม ตัวผู้มีแผงคอหนาฟู คำรามก้องป่า',
    funFact: 'สิงโตชอบอยู่รวมกันเป็นฝูงใหญ่ที่เรียกว่าไพรด์ (Pride)!',
    soundDescription: 'โฮก โฮก'
  },
  {
    id: 'tiger',
    name: 'เสือ',
    englishName: 'Tiger',
    category: 'animals',
    hint: 'สัตว์กินเนื้อตัวโต มีลายพาดกลอนสีดำทั่วลำตัว ว่ายน้ำเก่ง',
    funFact: 'ลายพาดกลอนของเสือแต่ละตัวจะไม่ซ้ำกัน เหมือนลายนิ้วมือคน!',
    soundDescription: 'กรู๊ โฮก'
  },
  {
    id: 'monkey',
    name: 'ลิง',
    englishName: 'Monkey',
    category: 'animals',
    hint: 'ซุกซน ห้อยโหนบนต้นไม้ มีหางยาว ชอบกินกล้วย',
    funFact: 'ลิงใช้หางช่วยทรงตัวและหยิบจับกิ่งไม้ได้คล่องแคล่วมาก!',
    soundDescription: 'เจี๊ยก เจี๊ยก'
  },
  {
    id: 'giraffe',
    name: 'ยีราฟ',
    englishName: 'Giraffe',
    category: 'animals',
    hint: 'คอยาวที่สุดในโลก มีลายจุดสีน้ำตาล กินใบไม้บนยอดไม้สูง',
    funFact: 'ยีราฟมีลิ้นยาวเกือบครึ่งเมตร ใช้ตวัดกินใบไม้ที่มีหนามได้สบาย!',
    soundDescription: 'ฮึ่ม ฮึ่ม'
  },
  {
    id: 'zebra',
    name: 'ม้าลาย',
    englishName: 'Zebra',
    category: 'animals',
    hint: 'รูปร่างคล้ายม้า แต่มีลายทางสีขาวสลับดำทั่วทั้งตัว',
    funFact: 'ลายขาวดำของม้าลายช่วยพรางตาไม่ให้แมลงกัดต่อยได้ง่าย!',
    soundDescription: 'ฮี้ๆ ฮี่'
  },
  {
    id: 'frog',
    name: 'กบ',
    englishName: 'Frog',
    category: 'animals',
    hint: 'ตากลมโต กระโดดไกล ร้องอ๊บๆ อาศัยอยู่ทั้งในน้ำและบนบก',
    funFact: 'กบสามารถหายใจทางผิวหนังได้เมื่อผิวหนังมีความชุ่มชื้น!',
    soundDescription: 'อ๊บ อ๊บ'
  },
  {
    id: 'snake',
    name: 'งู',
    englishName: 'Snake',
    category: 'animals',
    hint: 'ลำตัวยาว ไม่มีขา เลื้อยคดเคี้ยวไปมา ชอบแลบลิ้นฟ่อๆ',
    funFact: 'งูแลบลิ้นสองแฉกเพื่อดมกลิ่นในอากาศและตามหาอาหาร!',
    soundDescription: 'ฟ่อ ฟ่อ'
  },
  {
    id: 'crab',
    name: 'ปู',
    englishName: 'Crab',
    category: 'animals',
    hint: 'มีก้ามใหญ่สองข้าง มีขาแปดขา ชอบเดินไปด้านข้าง',
    funFact: 'ปูมีดวงตายื่นออกมาจากกระดอง และสามารถงอกก้ามใหม่ได้ถ้าหลุดไป!',
    soundDescription: 'กริ๊ก กริ๊ก'
  },
  {
    id: 'dolphin',
    name: 'โลมา',
    englishName: 'Dolphin',
    category: 'animals',
    hint: 'สัตว์เลี้ยงลูกด้วยนมในทะเล ฉลาด ขี้เล่น ชอบกระโดดเหนือน้ำ',
    funFact: 'โลมาใช้เสียงคลื่นสะท้อนใต้น้ำในการมองเห็นและคุยกับเพื่อน!',
    soundDescription: 'คิ๊ก คิ๊ก'
  },
  {
    id: 'owl',
    name: 'นกฮูก',
    englishName: 'Owl',
    category: 'animals',
    hint: 'ตากลมโต หมุนคอได้เกือบครึ่งรอบ ออกหากินเวลากลางคืน',
    funFact: 'นกฮูกบินได้เงียบกริบจนเหยื่อไม่ได้ยินเสียงกระพือปีกเลย!',
    soundDescription: 'ฮูก ฮูก'
  },
  {
    id: 'penguin',
    name: 'เพนกวิน',
    englishName: 'Penguin',
    category: 'animals',
    hint: 'นกที่บินไม่ได้ แต่ว่ายน้ำเก่งมาก ตัวสีดำขาว เดินเตาะแตะ',
    funFact: 'เพนกวินชอบสไลด์ตัวบนหิมะด้วยหน้าท้องเพื่อเดินทางอย่างรวดเร็ว!',
    soundDescription: 'กว๊าก กว๊าก'
  },
  {
    id: 'chicken',
    name: 'ไก่',
    englishName: 'Chicken',
    category: 'animals',
    hint: 'มีหงอนสีแดงบนหัว มีเดือย ขันเอ้กอีเอ้กเอ้กในตอนเช้า',
    funFact: 'แม่ไก่จะคอยกกไข่และดูแลลูกเจี๊ยบตัวเหลืองนุ่มฟูอย่างอบอุ่น!',
    soundDescription: 'กระต๊าก เอ้กอีเอ้กเอ้ก'
  },
  {
    id: 'pig',
    name: 'หมู',
    englishName: 'Pig',
    category: 'animals',
    hint: 'จมูกกลมแบน หางสั้นขดเป็นเกลียว ร้องอู๊ดๆ ชอบนอนคลุกโคลน',
    funFact: 'หมูชอบนอนแช่โคลนเพื่อให้ตัวเย็นสบายและป้องกันแสงแดด!',
    soundDescription: 'อู๊ด อู๊ด'
  },
  {
    id: 'cow',
    name: 'วัว',
    englishName: 'Cow',
    category: 'animals',
    hint: 'ตัวโต มีเขา มีเต้านม ให้น้ำนมแสนอร่อย ร้องมอๆ กินหญ้า',
    funFact: 'วัวมีกระเพาะอาหาร 4 ส่วนเพื่อช่วยย่อยหญ้าที่กินเข้าไป!',
    soundDescription: 'มอ มอ'
  },
  {
    id: 'sheep',
    name: 'แกะ',
    englishName: 'Sheep',
    category: 'animals',
    hint: 'ขนฟูนุ่มปุกปุยสีขาวเหมือนก้อนเมฆ ร้องแบ๊ะๆ กินหญ้า',
    funFact: 'ขนแกะนำมาปั่นเป็นเส้นด้ายเพื่อทอเป็นเสื้อกันหนาวอุ่นๆ!',
    soundDescription: 'แบ๊ะ แบ๊ะ'
  },
  {
    id: 'goat',
    name: 'แพะ',
    englishName: 'Goat',
    category: 'animals',
    hint: 'มีเคราใต้คาง มีเขาโค้ง ปีนป่ายหน้าผาเก่ง ร้องแมะๆ',
    funFact: 'แพะเป็นสัตว์ที่ทรงตัวและปีนป่ายบนโขดหินสูงชันได้ยอดเยี่ยม!',
    soundDescription: 'แมะ แมะ'
  },
  {
    id: 'deer',
    name: 'กวาง',
    englishName: 'Deer',
    category: 'animals',
    hint: 'ตัวเพรียว วิ่งเร็ว ตัวผู้มีเขาแตกกิ่งก้านสาขาสวยงาม',
    funFact: 'เขากวางจะผลัดตกและงอกขึ้นมาใหม่ที่สวยและใหญ่กว่าเดิมทุกปี!',
    soundDescription: 'แปร๋น แง๋ว'
  },
  {
    id: 'squirrel',
    name: 'กระรอก',
    englishName: 'Squirrel',
    category: 'animals',
    hint: 'หางฟูเป็นพวง วิ่งไต่ตามกิ่งไม้ ชอบแทะลูกโอ๊กและถั่ว',
    funFact: 'กระรอกชอบซ่อนลูกถั่วไว้ใต้ดิน แล้วมักจะลืมจนงอกเป็นต้นไม้ใหม่!',
    soundDescription: 'จิ๊ด จิ๊ด'
  },
  {
    id: 'panda',
    name: 'หมีแพนด้า',
    englishName: 'Panda',
    category: 'animals',
    hint: 'หมีตัวอ้วนกลม ขนสีขาวสลับดำ มีขอบตาดำ ชอบกินต้นไผ่',
    funFact: 'แพนด้าใช้เวลาแทะกินไผ่เกือบ 12 ชั่วโมงในหนึ่งวันเลยทีเดียว!',
    soundDescription: 'อึ๋ม อั๋ม'
  },
  {
    id: 'crocodile',
    name: 'จระเข้',
    englishName: 'Crocodile',
    category: 'animals',
    hint: 'สัตว์เลื้อยคลานปากยาว มีฟันแหลมคม ผิวหนังหนาเป็นเกล็ดแข็ง',
    funFact: 'จระเข้สามารถนอนอ้าปากนิ่งๆ เพื่อช่วยระบายความร้อนของร่างกาย!',
    soundDescription: 'ครืด ครืด'
  },

  // ==============================================================
  // หมวดที่ 2 สิ่งของ (Objects) - 30 รายการ
  // ==============================================================
  {
    id: 'ball',
    name: 'ลูกบอล',
    englishName: 'Ball',
    category: 'objects',
    hint: 'ทรงกลมกลิ้งได้ เด้งดึ๋ง ใช้เตะหรือโยนเล่นกีฬา',
    funFact: 'ลูกบอลมีหลายแบบ ทั้งฟุตบอล บาสเกตบอล และลูกบอลชายหาด!',
    soundDescription: 'เด้ง ดึ๋ง'
  },
  {
    id: 'car',
    name: 'รถยนต์',
    englishName: 'Car',
    category: 'objects',
    hint: 'มียานพาหนะ 4 ล้อ มีพวงมาลัย ขับแล่นบนถนน บีบแตรปริ๊นๆ',
    funFact: 'รถยนต์ช่วยพาเราเดินทางไปที่ไกลๆ ได้อย่างรวดเร็วและปลอดภัย!',
    soundDescription: 'บรื๊น ปริ๊น'
  },
  {
    id: 'bicycle',
    name: 'จักรยาน',
    englishName: 'Bicycle',
    category: 'objects',
    hint: 'มียานพาหนะ 2 ล้อ มีแฮนด์จับและที่ปั่น ใช้สองขาปั่นออกกำลังกาย',
    funFact: 'การปั่นจักรยานช่วยให้กล้ามเนื้อขาแข็งแรงและรักษ์โลกด้วยนะ!',
    soundDescription: 'กริ๊ง กริ๊ง'
  },
  {
    id: 'pencil',
    name: 'ดินสอ',
    englishName: 'Pencil',
    category: 'objects',
    hint: 'แท่งยาว ปลายแหลม ใช้เขียนหนังสือหรือวาดรูป',
    funFact: 'ไส้ดินสอทำจากแร่แกรไฟต์ ไม่ใช่ตะกั่ว ปลอดภัยต่อเด็กๆ!',
    soundDescription: 'ขีด เขียน'
  },
  {
    id: 'book',
    name: 'หนังสือ',
    englishName: 'Book',
    category: 'objects',
    hint: 'มีหน้ากระดาษหลายหน้า มีภาพสวยงามและนิทานสนุกๆ',
    funFact: 'การอ่านหนังสือทุกวันช่วยเปิดโลกแห่งจินตนาการและความรู้!',
    soundDescription: 'เปิด พลิก'
  },
  {
    id: 'umbrella',
    name: 'ร่ม',
    englishName: 'Umbrella',
    category: 'objects',
    hint: 'กางออกได้เมื่อฝนตกหรือแดดออก มีด้ามจับโค้งงอ',
    funFact: 'ร่มถูกประดิษฐ์ขึ้นมาหลายพันปีแล้วเพื่อป้องกันแดดและฝน!',
    soundDescription: 'กาง พรึ่บ'
  },
  {
    id: 'cup',
    name: 'ถ้วย',
    englishName: 'Cup',
    category: 'objects',
    hint: 'ภาชนะมีหูจับ ใช้สำหรับใส่น้ำ นม หรือช็อกโกแลตร้อน',
    funFact: 'ถ้วยมีหูช่วยให้เราจับดื่มเครื่องดื่มอุ่นๆ โดยไม่ร้อนมือ!',
    soundDescription: 'กริ๊ก'
  },
  {
    id: 'spoon',
    name: 'ช้อน',
    englishName: 'Spoon',
    category: 'objects',
    hint: 'มีด้ามจับ ปลายมนกลม ใช้ตักอาหารเข้าปากเวลาทานข้าว',
    funFact: 'ช้อนช่วยให้เราตักอาหารและซุปได้อย่างสะดวกและถูกสุขอนามัย!',
    soundDescription: 'ตัก ทาน'
  },
  {
    id: 'scissors',
    name: 'กรรไกร',
    englishName: 'Scissors',
    category: 'objects',
    hint: 'เครื่องมือมีช่องสอดนิ้วสองข้าง มีใบมีดไขว้กัน ใช้ตัดกระดาษ',
    funFact: 'กรรไกรสำหรับเด็กจะมีปลายมน เพื่อความปลอดภัยในการตัดกระดาษ!',
    soundDescription: 'ฉับ ฉับ'
  },
  {
    id: 'clock',
    name: 'นาฬิกา',
    englishName: 'Clock',
    category: 'objects',
    hint: 'หน้าปัดมีเข็มสั้น เข็มยาว เดินติ๊กต็อก คอยบอกเวลา',
    funFact: 'นาฬิกาช่วยบอกเวลาตื่นนอน ไปโรงเรียน และเวลาเข้านอนของเด็กๆ!',
    soundDescription: 'ติ๊ก ต็อก'
  },
  {
    id: 'schoolbag',
    name: 'กระเป๋านักเรียน',
    englishName: 'Schoolbag',
    category: 'objects',
    hint: 'มีสายสะพายหลัง ใช้ใส่สมุด หนังสือ ดินสอไปโรงเรียน',
    funFact: 'กระเป๋านักเรียนที่ดีควรมีสายสะพายนุ่มๆ เพื่อไม่ให้ปวดไหล่!',
    soundDescription: 'รูด ซิป'
  },
  {
    id: 'shoes',
    name: 'รองเท้า',
    englishName: 'Shoes',
    category: 'objects',
    hint: 'สวมใส่ที่เท้าทั้งสองข้าง เพื่อป้องกันเท้าเวลาเดินหรือวิ่ง',
    funFact: 'รองเท้าผ้าใบช่วยรองรับแรงกระแทกเวลาเด็กๆ วิ่งเล่นในสนาม!',
    soundDescription: 'ตึก ตัก'
  },
  {
    id: 'hat',
    name: 'หมวก',
    englishName: 'Hat',
    category: 'objects',
    hint: 'สวมใส่บนศีรษะ มีปีกรอบ ช่วยบังแดดและกันลม',
    funFact: 'การใส่หมวกเวลาออกไปเล่นกลางแจ้งช่วยป้องกันแสงแดดส่องตา!',
    soundDescription: 'สวม ใส่'
  },
  {
    id: 'glasses',
    name: 'แว่นตา',
    englishName: 'Glasses',
    category: 'objects',
    hint: 'มีกรอบสองข้างพร้อมเลนส์ใส สวมบนใบหน้าช่วยให้มองเห็นชัดขึ้น',
    funFact: 'แว่นตามีทั้งแว่นสายตาและแว่นกันแดดที่ช่วยปกป้องดวงตา!',
    soundDescription: 'คลิก'
  },
  {
    id: 'toothbrush',
    name: 'แปรงสีฟัน',
    englishName: 'Toothbrush',
    category: 'objects',
    hint: 'ด้ามจับยาว มีขนแปรงนุ่มๆ ใช้แปรงฟันให้สะอาดทุกเช้าและก่อนนอน',
    funFact: 'การแปรงฟันวันละ 2 ครั้งช่วยป้องกันฟันผุและทำให้ลมหายใจหอมสดชื่น!',
    soundDescription: 'ชึก ชัก'
  },
  {
    id: 'chair',
    name: 'เก้าอี้',
    englishName: 'Chair',
    category: 'objects',
    hint: 'มีพนักพิงหลัง มี 4 ขา ใช้สำหรับนั่งพักผ่อนหรือทำการบ้าน',
    funFact: 'การนั่งเก้าอี้หลังตรงช่วยให้กระดูกสันหลังเติบโตแข็งแรง!',
    soundDescription: 'นั่ง ลง'
  },
  {
    id: 'table',
    name: 'โต๊ะ',
    englishName: 'Table',
    category: 'objects',
    hint: 'พื้นผิวเรียบแบน มี 4 ขา ใช้วางของ เขียนหนังสือ หรือทานข้าว',
    funFact: 'โต๊ะอาหารเป็นที่ที่ครอบครัวได้นั่งล้อมวงพูดคุยและทานอาหารพร้อมหน้า!',
    soundDescription: 'วาง ลง'
  },
  {
    id: 'bed',
    name: 'เตียง',
    englishName: 'Bed',
    category: 'objects',
    hint: 'ฟูกนุ่มๆ พร้อมหมอนและผ้าห่ม ใช้นอนหลับพักผ่อนยามค่ำคืน',
    funFact: 'การนอนหลับบนเตียงที่สบายช่วยให้ร่างกายเติบโตและสมองสดใส!',
    soundDescription: 'นอน สบาย'
  },
  {
    id: 'lamp',
    name: 'โคมไฟ',
    englishName: 'Lamp',
    category: 'objects',
    hint: 'มีหลอดไฟและฝาครอบ ส่องแสงสว่างบนโต๊ะเขียนหนังสือ',
    funFact: 'โคมไฟช่วยให้แสงสว่างเพียงพอ ถนอมสายตาเวลาอ่านหนังสือ!',
    soundDescription: 'คลิก สว่าง'
  },
  {
    id: 'phone',
    name: 'โทรศัพท์',
    englishName: 'Phone',
    category: 'objects',
    hint: 'เครื่องสี่เหลี่ยมหน้าจอสัมผัส ใช้โทรคุยและส่งข้อความหาคุณพ่อคุณแม่',
    funFact: 'โทรศัพท์ช่วยเชื่อมโยงผู้คนจากทั่วทุกมุมโลกให้คุยกันได้ยินเสียงทันที!',
    soundDescription: 'กริ๊ง กริ๊ง'
  },
  {
    id: 'television',
    name: 'โทรทัศน์',
    englishName: 'Television',
    category: 'objects',
    hint: 'จอภาพขนาดใหญ่ มีภาพเคลื่อนไหวและเสียง ฉายการ์ตูนและข่าว',
    funFact: 'โทรทัศน์เครื่องแรกๆ มีเพียงภาพขาวดำ ก่อนจะพัฒนาเป็นภาพสีสดใส!',
    soundDescription: 'เปิด จอ'
  },
  {
    id: 'fan',
    name: 'พัดลม',
    englishName: 'Fan',
    category: 'objects',
    hint: 'มีใบพัดหมุนเร็ว ลมพัดเย็นสบาย คลายร้อนในวันที่อบอ้าว',
    funFact: 'ใบพัดของพัดลมถูกออกแบบให้เอียงเพื่อกวักลมเป่าออกมาข้างหน้า!',
    soundDescription: 'วื้ด วื้ด'
  },
  {
    id: 'key',
    name: 'กุญแจ',
    englishName: 'Key',
    category: 'objects',
    hint: 'โลหะชิ้นเล็ก มีรอยหยัก ใช้ไขเปิดและล็อคประตูบ้านหรือตู้',
    funFact: 'รอยหยักของกุญแจแต่ละดอกจะถูกตัดมาอย่างแม่นยำเพื่อแม่กุญแจตัวนั้นเท่านั้น!',
    soundDescription: 'คลิก แกร๊ก'
  },
  {
    id: 'balloon',
    name: 'ลูกโป่ง',
    englishName: 'Balloon',
    category: 'objects',
    hint: 'ทำจากยาง ลอยได้ มีสีสันสดใส มีเชือกผูกด้านล่าง',
    funFact: 'ลูกโป่งที่ลอยได้จะเติมก๊าซฮีเลียมซึ่งมีน้ำหนักเบากว่าอากาศ!',
    soundDescription: 'ลอย ฟิ้ว'
  },
  {
    id: 'kite',
    name: 'ว่าว',
    englishName: 'Kite',
    category: 'objects',
    hint: 'โครงไม้ติดกระดาษรูปสี่เหลี่ยม มีหางยาว ลอยสูงในสายลม',
    funFact: 'ว่าวสามารถลอยขึ้นไปบนท้องฟ้าได้เพราะแรงยกของกระแสลม!',
    soundDescription: 'ลอย ไหว'
  },
  {
    id: 'teddy',
    name: 'ตุ๊กตา',
    englishName: 'Teddy Bear',
    category: 'objects',
    hint: 'ของเล่นตัวนุ่มนิ่ม มีหูกลม ตาแป๋ว กอดนอนอุ่นสบาย',
    funFact: 'ตุ๊กตาหมีเท็ดดี้แบร์ตั้งชื่อตามประธานาธิบดีทีโอดอร์ รูสเวลต์!',
    soundDescription: 'กอด นุ่ม'
  },
  {
    id: 'airplane',
    name: 'เครื่องบิน',
    englishName: 'Airplane',
    category: 'objects',
    hint: 'มีปีกสองข้าง บินข้ามก้อนเมฆบนท้องฟ้า พาผู้โดยสารไปทั่วโลก',
    funFact: 'เครื่องบินบินได้สูงกว่ายอดเขาเอเวอเรสต์ และเร็วมาก!',
    soundDescription: 'หวึ่บ ฟิ้ว'
  },
  {
    id: 'train',
    name: 'รถไฟ',
    englishName: 'Train',
    category: 'objects',
    hint: 'มีโบกี้ต่อกันยาวๆ วิ่งบนรางเหล็ก ร้องปู๊นๆ ฉึกฉักๆ',
    funFact: 'รถไฟหัวกระสุนในปัจจุบันสามารถวิ่งเร็วได้มากกว่า 300 กิโลเมตรต่อชั่วโมง!',
    soundDescription: 'ปู๊น ปู๊น ฉึกฉัก'
  },
  {
    id: 'bus',
    name: 'รถบัส',
    englishName: 'Bus',
    category: 'objects',
    hint: 'รถคันใหญ่ มีที่นั่งหลายแถว คอยรับส่งนักเรียนและผู้โดยสาร',
    funFact: 'รถบัสหนึ่งคันสามารถพาผู้คนเดินทางได้มากถึง 50 คนขึ้นไป!',
    soundDescription: 'บรื๊น บรื๊น'
  },
  {
    id: 'water_bottle',
    name: 'ขวดน้ำ',
    englishName: 'Water Bottle',
    category: 'objects',
    hint: 'กระบอกใส่น้ำดื่ม พกพาไปโรงเรียน มีฝาปิดสนิทไม่หก',
    funFact: 'การพกขวดน้ำส่วนตัวช่วยลดขยะพลาสติกและทำให้เราดื่มน้ำได้ตลอดวัน!',
    soundDescription: 'เปิด ฝา'
  },

  // ==============================================================
  // หมวดที่ 3 ธรรมชาติและสิ่งรอบตัว (Nature & Surroundings) - 30 รายการ
  // ==============================================================
  {
    id: 'tree',
    name: 'ต้นไม้',
    englishName: 'Tree',
    category: 'nature',
    hint: 'มีลำต้นสีน้ำตาล มีพุ่มใบสีเขียว ให้ร่มเงาและอากาศบริสุทธิ์',
    funFact: 'ต้นไม้ผลิตออกซิเจนให้เราได้หายใจ และเป็นบ้านของสัตว์หลายชนิด!',
    soundDescription: 'ซู่ ซู่'
  },
  {
    id: 'flower',
    name: 'ดอกไม้',
    englishName: 'Flower',
    category: 'nature',
    hint: 'มีกลีบดอกสีสันสดใส ส่งกลิ่นหอม มีเกสรให้ผึ้งและผีเสื้อ',
    funFact: 'ดอกไม้มีกลิ่นหอมและสีสวยเพื่อดึงดูดผึ้งและผีเสื้อมาช่วยผสมเกสร!',
    soundDescription: 'บาน สวย'
  },
  {
    id: 'mountain',
    name: 'ภูเขา',
    englishName: 'Mountain',
    category: 'nature',
    hint: 'เนินดินและหินสูงใหญ่เสียดฟ้า มียอดเขาแหลมสูงตระหง่าน',
    funFact: 'ภูเขาที่สูงที่สุดในโลกคือยอดเขาเอเวอเรสต์ สูงเสียดเมฆเลยทีเดียว!',
    soundDescription: 'สูง ใหญ่'
  },
  {
    id: 'cloud',
    name: 'เมฆ',
    englishName: 'Cloud',
    category: 'nature',
    hint: 'ก้อนปุกปุยสีขาวลอยอยู่บนท้องฟ้า คล้ายสำลีหรือขนมสายไหม',
    funFact: 'เมฆเกิดจากละอองน้ำเล็กๆ ลอยมารวมกัน เมื่อหนักขึ้นจะกลายเป็นฝนตกลงมา!',
    soundDescription: 'ลอย ฟู'
  },
  {
    id: 'sun',
    name: 'ดวงอาทิตย์',
    englishName: 'Sun',
    category: 'nature',
    hint: 'ทรงกลมสีส้มเหลืองส่องแสงเจิดจ้า ให้แสงสว่างและความอบอุ่นในตอนกลางวัน',
    funFact: 'ดวงอาทิตย์เป็นดาวฤกษ์ดวงใหญ่ที่ให้พลังงานแก่สิ่งมีชีวิตทั้งหมดบนโลก!',
    soundDescription: 'สว่าง จ้า'
  },
  {
    id: 'moon',
    name: 'พระจันทร์',
    englishName: 'Moon',
    category: 'nature',
    hint: 'ส่องแสงนวลยามค่ำคืน บางวันเป็นเสี้ยวโค้ง บางวันเต็มดวง',
    funFact: 'พระจันทร์ไม่มีแสงสว่างในตัวเอง แต่สะท้อนแสงจากดวงอาทิตย์มายังโลก!',
    soundDescription: 'ส่อง นวล'
  },
  {
    id: 'star',
    name: 'ดาว',
    englishName: 'Star',
    category: 'nature',
    hint: 'ส่องแสงระยิบระยับอยู่เต็มท้องฟ้ายามค่ำคืน เป็นประกายแวววาว',
    funFact: 'ดวงดาวที่เราเห็นบนท้องฟ้าอยู่ห่างไกลจากโลกหลายล้านกิโลเมตร!',
    soundDescription: 'ระยิบ ระยับ'
  },
  {
    id: 'rainbow',
    name: 'สายรุ้ง',
    englishName: 'Rainbow',
    category: 'nature',
    hint: 'แถบสีโค้งสวยงาม 7 สี ปรากฏขึ้นบนท้องฟ้าหลังฝนตกแดดออก',
    funFact: 'สายรุ้งเกิดจากแสงแดดส่องผ่านละอองน้ำฝนแล้วหักเหเป็น 7 สี!',
    soundDescription: 'สวย งาม'
  },
  {
    id: 'leaf',
    name: 'ใบไม้',
    englishName: 'Leaf',
    category: 'nature',
    hint: 'แผ่นบางสีเขียวติดอยู่กับกิ่งไม้ มีเส้นใบ สังเคราะห์แสงแดด',
    funFact: 'ใบไม้มีสีเขียวเพราะสารคลอโรฟิลล์ที่ใช้ปรุงอาหารจากแสงแดด!',
    soundDescription: 'ปลิว ไหว'
  },
  {
    id: 'mushroom',
    name: 'เห็ด',
    englishName: 'Mushroom',
    category: 'nature',
    hint: 'รูปร่างคล้ายร่มคันเล็ก ชอบงอกในที่ชื้นตามขอนไม้หรือพื้นดิน',
    funFact: 'เห็ดไม่ใช่ทั้งพืชและสัตว์ แต่เป็นสิ่งมีชีวิตกลุ่มฟังไจ (Fungi)!',
    soundDescription: 'งอก งาม'
  },
  {
    id: 'rock',
    name: 'ก้อนหิน',
    englishName: 'Rock',
    category: 'nature',
    hint: 'ก้อนแข็งตามธรรมชาติ มีรูปร่างโค้งมน แข็งแรงทนทาน',
    funFact: 'ก้อนหินบางก้อนมีอายุเก่าแก่หลายล้านปีตั้งแต่กำเนิดโลก!',
    soundDescription: 'ตึก แน่น'
  },
  {
    id: 'volcano',
    name: 'ภูเขาไฟ',
    englishName: 'Volcano',
    category: 'nature',
    hint: 'ภูเขาที่มีปล่องด้านบน ปะทุควันและลาวาสีแดงร้อนออกมา',
    funFact: 'ลาวาที่เย็นตัวลงจากภูเขาไฟจะกลายเป็นหินและดินที่อุดมสมบูรณ์มาก!',
    soundDescription: 'บรึ้ม ร้อน'
  },
  {
    id: 'waterfall',
    name: 'น้ำตก',
    englishName: 'Waterfall',
    category: 'nature',
    hint: 'สายน้ำไหลตกลงมาจากหน้าผาสูงชัน ส่งเสียงซ่าๆ สดชื่นเย็นฉ่ำ',
    funFact: 'ละอองน้ำจากน้ำตกช่วยทำให้อากาศรอบๆ เย็นสบายและบริสุทธิ์!',
    soundDescription: 'ซ่า ซ่า'
  },
  {
    id: 'sea_wave',
    name: 'คลื่นทะเล',
    englishName: 'Sea Wave',
    category: 'nature',
    hint: 'มวลน้ำทะเลที่ม้วนตัวซัดเข้าหาชายหาด เกิดฟองคลื่นสีขาว',
    funFact: 'คลื่นทะเลส่วนใหญ่เกิดจากลมที่พัดผ่านผิวน้ำในมหาสมุทร!',
    soundDescription: 'ซัด ซ่า'
  },
  {
    id: 'palm_tree',
    name: 'ต้นมะพร้าว',
    englishName: 'Palm Tree',
    category: 'nature',
    hint: 'ต้นสูงชะลูด ใบเรียวยาวโค้งงอ มีลูกมะพร้าวห้อยอยู่ริมทะเล',
    funFact: 'ลูกมะพร้าวสามารถลอยน้ำทะเลข้ามเกาะไปงอกเป็นต้นใหม่ได้!',
    soundDescription: 'ไหว ลม'
  },
  {
    id: 'cactus',
    name: 'ต้นกระบองเพชร',
    englishName: 'Cactus',
    category: 'nature',
    hint: 'ต้นสีเขียว มีหนามแหลมรอบตัว ทนแดดทนแล้งในทะเลทราย',
    funFact: 'หนามของกระบองเพชรคือใบที่เปลี่ยนรูปเพื่อลดการสูญเสียน้ำ!',
    soundDescription: 'ทน แล้ง'
  },
  {
    id: 'apple',
    name: 'แอปเปิล',
    englishName: 'Apple',
    category: 'nature',
    hint: 'ผลไม้ทรงกลมสีแดงสด มีขั้วก้านด้านบน รสหวานกรอบอร่อย',
    funFact: 'แอปเปิลมีไฟเบอร์สูง ช่วยให้ระบบขับถ่ายของเด็กๆ ทำงานได้ดี!',
    soundDescription: 'กรุบ กรอบ'
  },
  {
    id: 'banana',
    name: 'กล้วย',
    englishName: 'Banana',
    category: 'nature',
    hint: 'ผลโค้งยาว สีเหลืองทอง ปอกเปลือกง่าย รสหวานนุ่ม',
    funFact: 'กล้วยมีโพแทสเซียมสูง ช่วยให้กล้ามเนื้อและสมองมีพลังงาน!',
    soundDescription: 'ปอก อร่อย'
  },
  {
    id: 'watermelon',
    name: 'แตงโม',
    englishName: 'Watermelon',
    category: 'nature',
    hint: 'ผลกลมโต เปลือกสีเขียวลาย เนื้อในสีแดงฉ่ำน้ำ มีเม็ดสีดำ',
    funFact: 'แตงโมมีน้ำประกอบอยู่ถึง 92% ช่วยแก้กระหายในวันที่อากาศร้อน!',
    soundDescription: 'ฉ่ำ ชื่นใจ'
  },
  {
    id: 'pineapple',
    name: 'สับปะรด',
    englishName: 'Pineapple',
    category: 'nature',
    hint: 'ผลมีตารอบตัว มียอดใบแหลมเหมือนมงกุฎ เนื้อสีเหลืองรสเปรี้ยวหวาน',
    funFact: 'สับปะรดหนึ่งผลเกิดจากการรวมตัวกันของผลไม้เล็กๆ นับร้อยผล!',
    soundDescription: 'หวาน เปรี้ยว'
  },
  {
    id: 'mango',
    name: 'มะม่วง',
    englishName: 'Mango',
    category: 'nature',
    hint: 'ผลรูปทรงหยดน้ำ สุกแล้วเปลือกสีเหลืองทอง เนื้อหวานหอม',
    funFact: 'มะม่วงเป็นผลไม้เมืองร้อนที่อุดมไปด้วยวิตามินเอและวิตามินซี!',
    soundDescription: 'หอม หวาน'
  },
  {
    id: 'orange',
    name: 'ส้ม',
    englishName: 'Orange',
    category: 'nature',
    hint: 'ผลกลมสีส้ม เปลือกมีกลิ่นหอม ปอกออกเป็นกลีบ รสหวานอมเปรี้ยว',
    funFact: 'ส้มมีวิตามินซีสูงมาก ช่วยป้องกันโรคหวัดให้เด็กๆ แข็งแรง!',
    soundDescription: 'ชุ่ม ฉ่ำ'
  },
  {
    id: 'grapes',
    name: 'องุ่น',
    englishName: 'Grapes',
    category: 'nature',
    hint: 'ลูกกลมๆ เล็กๆ อยู่รวมกันเป็นพวง มีทั้งสีม่วงและสีเขียว',
    funFact: 'องุ่นสามารถนำมาตากแห้งเป็นลูกเกดแสนอร่อยได้ด้วยนะ!',
    soundDescription: 'หวาน กรุบ'
  },
  {
    id: 'strawberry',
    name: 'สตรอว์เบอร์รี',
    englishName: 'Strawberry',
    category: 'nature',
    hint: 'ผลรูปหัวใจสีแดงสด มีเม็ดเล็กๆ รอบผล มีจุกใบสีเขียว',
    funFact: 'สตรอว์เบอร์รีเป็นผลไม้ชนิดเดียวที่มีเมล็ดอยู่ด้านนอกผล!',
    soundDescription: 'เปรี้ยว หวาน'
  },
  {
    id: 'pumpkin',
    name: 'ฟักทอง',
    englishName: 'Pumpkin',
    category: 'nature',
    hint: 'ผลกลมแบน ผิวมีรอยหยักเป็นพู เนื้อสีเหลืองทอง นำมาทำขนมหวาน',
    funFact: 'ฟักทองมีเบต้าแคโรทีนสูง ช่วยบำรุงสายตาให้มองเห็นชัดเจน!',
    soundDescription: 'มัน หวาน'
  },
  {
    id: 'carrot',
    name: 'แครอต',
    englishName: 'Carrot',
    category: 'nature',
    hint: 'หัวยาวเรียวสีส้ม ฝังอยู่ในดิน มียอดใบสีเขียว กระต่ายชอบกิน',
    funFact: 'แครอตอุดมไปด้วยวิตามินเอ ช่วยให้สายตาแข็งแรงและผิวพรรณสดใส!',
    soundDescription: 'กรุบ กรุบ'
  },
  {
    id: 'corn',
    name: 'ข้าวโพด',
    englishName: 'Corn',
    category: 'nature',
    hint: 'ฝักยาวเรียว มีเมล็ดสีเหลืองเรียงเป็นแถว มีกาบใบห่อหุ้ม',
    funFact: 'เมล็ดข้าวโพดสามารถนำมาคั่วให้แตกออกเป็นป๊อปคอร์นหอมอร่อย!',
    soundDescription: 'หวาน กรอบ'
  },
  {
    id: 'tomato',
    name: 'มะเขือเทศ',
    englishName: 'Tomato',
    category: 'nature',
    hint: 'ผลกลม ผิวเรียบมันสีแดงสด มีขั้วใบสีเขียว ฉ่ำน้ำ อร่อยมีประโยชน์',
    funFact: 'มะเขือเทศทางพฤกษศาสตร์ถือเป็นผลไม้ และมีสารไลโคปีนช่วยให้ผิวสุขภาพดี!',
    soundDescription: 'สด ฉ่ำ'
  },
  {
    id: 'lemon',
    name: 'มะนาว',
    englishName: 'Lemon',
    category: 'nature',
    hint: 'ผลกลมรี สีเขียวหรือเหลือง ผ่าครึ่งแล้วบีบน้ำรสเปรี้ยวจี๊ด',
    funFact: 'น้ำมะนาวช่วยเพิ่มความสดชื่นและมีวิตามินซีสูงมาก!',
    soundDescription: 'เปรี้ยว จี๊ด'
  },
  {
    id: 'coconut',
    name: 'มะพร้าว',
    englishName: 'Coconut',
    category: 'nature',
    hint: 'ผลกลม เปลือกแข็ง ภายในมีน้ำมะพร้าวหวานหอมและเนื้อมะพร้าวสีขาว',
    funFact: 'ต้นมะพร้าวสามารถนำมาใช้ประโยชน์ได้ทุกส่วน ทั้งใบ ลำต้น ผล และกะลา!',
    soundDescription: 'หวาน ชื่นใจ'
  }
];

export const CATEGORIES = [
  { id: 'all' as const, name: 'รวมทุกหมวด', count: 90, icon: 'Sparkles', color: 'bg-indigo-500' },
  { id: 'animals' as const, name: 'สัตว์น่ารัก', count: 30, icon: 'PawPrint', color: 'bg-amber-500' },
  { id: 'objects' as const, name: 'สิ่งของรอบตัว', count: 30, icon: 'Shapes', color: 'bg-sky-500' },
  { id: 'nature' as const, name: 'ธรรมชาติและสิ่งรอบตัว', count: 30, icon: 'Trees', color: 'bg-emerald-500' },
];

export const DIFFICULTIES = [
  {
    id: 'easy' as const,
    name: 'ระดับง่าย',
    subtitle: 'ตัวเลือก 3 ภาพ · สบายๆ สำหรับหนูน้อย',
    optionCount: 3,
    badgeColor: 'bg-emerald-400',
    stars: 1,
    timeLimit: null
  },
  {
    id: 'medium' as const,
    name: 'ระดับปานกลาง',
    subtitle: 'ตัวเลือก 4 ภาพ · สนุกกำลังดี',
    optionCount: 4,
    badgeColor: 'bg-amber-400',
    stars: 2,
    timeLimit: null
  },
  {
    id: 'hard' as const,
    name: 'ระดับท้าทาย',
    subtitle: 'ตัวเลือก 4 ภาพ · ฝึกไหวพริบและความจำ (ไม่จำกัดเวลา)',
    optionCount: 4,
    badgeColor: 'bg-rose-400',
    stars: 3,
    timeLimit: null
  }
];
