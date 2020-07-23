// teksto apimtys:
// - mazai: 0-60
// - vidutiniskai: 61-300
// - daug: 301 - 1000
const posts = [
    {
        author: {
            authorPhoto: 'chuck-norris.jpg',
            authorName: 'Chuck',
            authorSurname: 'Norris',
            authorLink: './chuck-norris.html'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1595402841066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae maiores voluptas expedita, explicabo odio assumenda, cumque autem, voluptatibus fugit aliquam dicta.'
            
        }
    },
    {
        author: {
            authorPhoto: 'wonder-woman.jpg',
            authorName: 'Wonder',
            authorSurname: 'Woman',
            authorLink: 'wonder-woman'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1595402801066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            
            postBackground: 'orange'
        }
    },
    {
        author: {
            authorPhoto: 'algimantas-cekuolis.jpg',
            authorName: 'Algimantas',
            authorSurname: 'Cekuolis',
            authorLink: 'alimantas-cekuolis'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1595402001066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, blanditiis vero laudantium ipsam excepturi praesentium atque error expedita possimus quo aperiam temporibus tempora reiciendis magni, qui illo quam non. Eos, quos tempora recusandae earum minima repellendus ex eveniet reprehenderit molestias est consequatur tempore neque? Provident ipsa similique aspernatur tenetur, dignissimos laborum, eos magni natus impedit, dicta doloribus minima id animi aut pariatur! Esse suscipit, sapiente eligendi explicabo aliquam ipsum non. Rerum voluptas hic repudiandae tenetur assumenda quod eius! Laboriosam officiis pariatur, porro voluptates iure rem atque, qui recusandae veritatis odio ea possimus quaerat adipisci iusto tempora quas unde in, ipsum ipsa obcaecati. Laboriosam hic a voluptatum rem velit nulla quia, impedit quis? Quod, quaerat! Libero voluptate facilis voluptatem repudiandae saepe doloribus fugiat praesentium dolorum harum cum minus tempora, tempore delectus adipisci obcaecati, dicta enim sit accusamus corrupti cumque quisquam? Rerum atque dicta, iure blanditiis ipsa, quo quibusdam aspernatur, laudantium corrupti molestiae excepturi? Molestiae sunt commodi qui perspiciatis esse minus dolore dignissimos eos. Quis explicabo debitis ad, earum ab maiores nemo iure facilis, accusantium aut quos? Doloribus atque praesentium non enim error perferendis expedita quidem quibusdam, numquam possimus? Iste nesciunt minus dolorum laboriosam labore voluptate deserunt saepe? Consequatur consequuntur libero praesentium non provident esse exercitationem odio possimus totam deserunt perspiciatis, fuga quos fugiat illo mollitia deleniti alias voluptates incidunt ducimus quod. Veritatis mollitia impedit hic quaerat, illum ipsa animi amet quidem et. Eligendi aperiam optio adipisci, est dicta natus quas, doloremque rerum iusto nesciunt sapiente, ipsum animi? Doloribus unde recusandae ipsam totam corporis suscipit amet eum rem, esse dolor ducimus hic beatae, ipsa minima praesentium, maiores quasi non. Vero sunt vel ratione pariatur, officiis voluptatibus expedita beatae saepe a ex natus corrupti perspiciatis impedit error. Rerum possimus quaerat ab ducimus dolorum unde quod necessitatibus sint, earum nihil consequatur alias quasi nisi voluptatem ipsam natus est mollitia enim nobis eaque voluptates delectus velit harum voluptate! Tenetur, accusantium laudantium odit, quisquam aliquam sed quos maiores voluptatem fuga nam vitae qui aspernatur saepe. Impedit odio in obcaecati accusantium nostrum quod cum natus, pariatur veritatis. Nobis, dolore explicabo esse laborum expedita fugiat mollitia consequatur eius libero porro officia, pariatur ipsum temporibus? Harum animi delectus quasi asperiores tenetur beatae soluta vero illo excepturi laudantium rerum, id fugiat at nam qui ex, magnam alias magni! Earum, eos vel et quia recusandae esse quam sed quis id beatae possimus repellendus laborum delectus ab totam! Ducimus, modi sequi nihil quasi inventore veritatis quidem eligendi voluptates qui. Reiciendis consectetur eaque quod praesentium quibusdam laudantium inventore at magnam obcaecati repellendus molestiae architecto, dicta exercitationem hic commodi illo consequatur, saepe beatae? Vel nulla dolores nostrum. Quisquam officiis quidem minus dolorum cum magni cumque? Quos placeat voluptatem, tenetur repudiandae vitae sequi laborum, vel molestias praesentium ipsam officia corrupti porro dolorum, amet consequuntur mollitia eos minus voluptatum aliquid earum aut ipsa. Obcaecati, rerum impedit, facere quisquam dolore voluptatibus aperiam velit eveniet nemo consequuntur recusandae eius tempora quaerat neque dolores amet dolorum natus possimus ipsa nisi animi molestias qui! Labore, reiciendis porro? Earum et hic eligendi id exercitationem aut deleniti deserunt architecto possimus unde ea, ut nihil officiis sunt odit repellat esse. Incidunt fuga libero et laudantium dolore possimus repellendus excepturi ipsam nihil provident sapiente saepe, temporibus ea aut, quasi suscipit dolores! Molestias enim esse iste dignissimos odio numquam velit neque error eveniet nihil. Quidem esse inventore dicta molestiae sapiente exercitationem, temporibus id rerum, quisquam ex illum nobis provident beatae aperiam eaque animi enim placeat accusamus explicabo? Neque eos maiores odio esse aperiam deleniti. Expedita incidunt obcaecati voluptatibus cumque nisi, praesentium corporis. Repudiandae sapiente, accusantium sit et dolorem odit odio. Blanditiis dignissimos quod fuga rerum nam laudantium quaerat architecto et officia laboriosam possimus eaque suscipit, minus deleniti consequuntur molestiae quia saepe ipsa. Delectus iusto modi vero reiciendis qui sint quo mollitia, tenetur nobis sit debitis necessitatibus quasi magnam fuga cumque. Odio aliquam aperiam est labore? Sed repellat porro nemo, praesentium neque ratione dolorum sapiente sunt maxime nulla unde, ipsum adipisci fugiat nesciunt minima ipsa alias minus voluptates molestiae blanditiis facilis magnam. Debitis explicabo distinctio autem magnam tempore architecto mollitia doloremque in est. Culpa pariatur architecto error eum autem libero nulla ducimus officiis cupiditate blanditiis, expedita itaque quidem, est praesentium iste minus iusto minima quas doloribus repudiandae rem officia. Doloremque architecto repellendus voluptates voluptatibus pariatur debitis iure autem, voluptatum eum perferendis quod magni repellat voluptas, quia voluptate dolore! Adipisci blanditiis officiis eum doloribus error cum tempora id, quo fuga quisquam temporibus quia esse delectus numquam doloremque ratione suscipit dolore fugit asperiores, a ducimus nobis recusandae dolores? Possimus quod esse ullam facere optio sint, dolorem aut suscipit quidem perferendis est itaque, minima tenetur sequi eos corporis, tempore ipsa numquam consequatur a voluptas. Alias, nostrum.'
        }
    },
    {
        author: {
            authorPhoto: 'jackie-chan.jpg',
            authorName: 'Jackie',
            authorSurname: 'Chan',
            authorLink: 'jackie-chan'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1595406501066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            postPhotos: [
                'photo1.jpg'
            ]
        }
    },
    {
        author: {
            authorPhoto: 'bruce-lee.jpg',
            authorName: 'Bruce',
            authorSurname: 'Lee',
            authorLink: 'bruce-lee'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1595046501066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse sequi est totam enim minima neque pariatur placeat a, modi iste soluta, possimus voluptate, facilis consequatur incidunt vel voluptas fugiat. Corporis explicabo officiis dolore mollitia aliquam omnis sunt quaerat exercitationem eveniet velit consequatur, earum natus odio odit, consequuntur sed? Saepe quaerat veniam quo repellat error sint animi ea commodi? Quos laborum modi corporis laboriosam, placeat nemo delectus officiis nihil commodi molestiae optio vero qui quaerat aliquid, reiciendis soluta pariatur nostrum! Consectetur incidunt saepe omnis dolorum autem nam. Ea officia saepe reiciendis ratione beatae fugiat aspernatur natus, doloribus architecto commodi quis sit recusandae corrupti illum?',
            postPhotos: [
                'photo1.jpg',
                'photo2.jpg'
            ]
        }
    },
    {
        author: {
            authorPhoto: 'bruce-willis.jpg',
            authorName: 'Brule',
            authorSurname: 'Willis',
            authorLink: 'bruce-willis'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1593046501066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse sequi est totam enim minima neque pariatur placeat a, modi iste soluta, possimus voluptate, facilis consequatur incidunt vel voluptas fugiat. Corporis explicabo officiis dolore mollitia aliquam omnis sunt quaerat exercitationem eveniet velit consequatur, earum natus odio odit, consequuntur sed? Saepe quaerat veniam quo repellat error sint animi ea commodi? Quos laborum modi corporis laboriosam, placeat nemo delectus officiis nihil commodi molestiae optio vero qui quaerat aliquid, reiciendis soluta pariatur nostrum! Consectetur incidunt saepe omnis dolorum autem nam. Ea officia saepe reiciendis ratione beatae fugiat aspernatur natus, doloribus architecto commodi quis sit recusandae corrupti illum?',
            postPhotos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg'
            ]
        }
    },
    {
        author: {
            authorPhoto: 'optimus-prime.jpg',
            authorName: 'Optimus',
            authorSurname: 'Prime',
            authorLink: 'optimus-prime'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1590046501066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse sequi est totam enim minima neque pariatur placeat a, modi iste soluta, possimus voluptate, facilis consequatur incidunt vel voluptas fugiat. Corporis explicabo officiis dolore mollitia aliquam omnis sunt quaerat exercitationem eveniet velit consequatur, earum natus odio odit, consequuntur sed? Saepe quaerat veniam quo repellat error sint animi ea commodi? Quos laborum modi corporis laboriosam, placeat nemo delectus officiis nihil commodi molestiae optio vero qui quaerat aliquid, reiciendis soluta pariatur nostrum! Consectetur incidunt saepe omnis dolorum autem nam. Ea officia saepe reiciendis ratione beatae fugiat aspernatur natus, doloribus architecto commodi quis sit recusandae corrupti illum?',
            postPhotos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg',
                'photo4.jpg'
            ]
        }
    },
    {
        author: {
            authorPhoto: 'harley-quinn.jpg',
            authorName: 'Harley',
            authorSurname: 'Quinn',
            authorLink: 'harley-quinn'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1550046501066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse sequi est totam enim minima neque pariatur placeat a, modi iste soluta, possimus voluptate, facilis consequatur incidunt vel voluptas fugiat. Corporis explicabo officiis dolore mollitia aliquam omnis sunt quaerat exercitationem eveniet velit consequatur, earum natus odio odit, consequuntur sed? Saepe quaerat veniam quo repellat error sint animi ea commodi? Quos laborum modi corporis laboriosam, placeat nemo delectus officiis nihil commodi molestiae optio vero qui quaerat aliquid, reiciendis soluta pariatur nostrum! Consectetur incidunt saepe omnis dolorum autem nam. Ea officia saepe reiciendis ratione beatae fugiat aspernatur natus, doloribus architecto commodi quis sit recusandae corrupti illum?',
            postPhotos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg',
                'photo4.jpg',
                'photo5.jpg',
                'photo6.jpg',
                'photo7.jpg'
            ]
        }
    },
    {
        author: {
            authorPhoto: 'homer-simpson.jpg',
            authorName: 'Homer',
            authorSurname: 'Simpson',
            authorLink: 'homer-simpson'
        },
        postTime: '2020-07-22 10:15:17',
        postTimeStamp: 1510046501066,
        // timeZone: 3,
        content: {
            postText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            
            postBackground: 'blue'
        }
    }
    
];

export default posts;