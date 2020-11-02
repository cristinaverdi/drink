let cocktailName = ""
document
  .getElementById("search-bar")
  .addEventListener('keypress', (event) => {
      if (event.key !="Enter") {
        cocktailName = cocktailName + event.key
      }else {
        console.log(cocktailName)
          searchByName(cocktailName)
          cocktailName = ""
      }
     
  })
function searchByName(cocktailName) {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName
    console.log(url)
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
        .then(response => response.json() )
        .then(data => {
            console.log(data)
            displayThumbs(data.drinks)} );
}
//console.log(searchByName("alexander"))

var cocktails=[
    {
      postTitle: "Lorem ipsum dolor",
      postAbstract: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      postContent: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      postThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      postImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      postLink: "article-link1"
    },
    {
      postTitle: "Sit amet consectetur",
      postAbstract: "Ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptatum, aliquam quaerat!",
      postContent: "<p>Porro, perferendis fugit nulla, praesentium doloremque harum laborum ipsam possimus. In, est optio fugiat itaque inventore suscipit voluptatem quam sit <b>voluptatibus nesciunt</b> quo, cum eius. Dolorem, animi, voluptas?</p><p>Necessitatibus esse tempore iure quasi molestias assumenda vitae, maxime corrupti aut blanditiis, odit facere ad tempora fugiat suscipit nulla consequatur, soluta. Dignissimos cupiditate assumenda voluptatum!</p>",
      postThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-inaem.jpg",
      postImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-inaem2.jpg",
      postLink: "article-link1"
    },
    {
      postTitle: "Adipisicing elit beatae",
      postAbstract: "Lorem ipsum dolor sit amet, odit nulla consectetur adipisicing elit. Fugit vero accusamus commodi ex?",
      postContent: "<p>Repudiandae voluptatem autem ab maiores <b>quaerat dicta illum</b> deleniti alias iure esse ex temporibus asperiores assumenda beatae veniam sit, eligendi magni quas quod, qui expedita similique error nulla debitis. Debitis <b>nemo ipsam rem dignissimos</b>, dicta repellat nulla nesciunt! Recusandae dicta numquam repellat tempore in cum, expedita. Quidem veniam, eos harum cumque aspernatur labore est enim voluptatibus numquam at ea vel provident facere doloremque. Natus, officiis eos!</p>",
      postThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-shigeru.jpg",
      postImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-shigeru4.jpg",
      postLink: "article-link1"
    },
    {
      postTitle: "Quidem neque commodi",
      postAbstract: "Aliquid sapiente harum maiores alias optio, ea vero perferendis impedit architecto culpa libero corporis.",
      postContent: "<p>Dolorum eos dignissimos eveniet deserunt veritatis possimus magnam enim, eaque non, architecto voluptates consequuntur nulla, modi nobis sunt perferendis voluptatibus accusantium voluptatem! Delectus iure architecto rem, ex quas necessitatibus illum autem obcaecati sapiente ea inventore quisquam debitis quae numquam. Iusto mollitia suscipit iste quae tempore ipsam facere <b>quia nobis et omnis accusantium quo</b>, quod tenetur, aperiam, rem quos quas eveniet exercitationem. Rem, hic optio. Harum quis porro optio facilis totam velit quibusdam corrupti saepe similique sed aut doloribus temporibus ipsum modi rerum, ab impedit.</p>",
      postThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-karuna.jpg",
      postImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-karuna2.jpg",
      postLink: "article-link1"
    },
    {
      postTitle: "Explicabo obcaecati",
      postAbstract: "Iste explicabo, architecto maiores nisi eaque doloribus aspernatur esse tera corporis iure itaque animi?",
      postContent: "<p>Voluptatem, similique. Sed doloribus quaerat ratione deleniti esse odit doloremque incidunt, aut, recusandae? Ipsam ipsum voluptas tenetur aut atque tempora ducimus, dolores qui, <b>maiores voluptatibus veniam</b>, quos inventore esse illum adipisci. Error quo officia, distinctio voluptates, possimus voluptatem dignissimos magni dolor, nobis expedita doloribus consequuntur beatae natus iusto ipsum culpa. Delectus pariatur, officia voluptatem, dolore enim cum temporibus deserunt reiciendis at quam labore aperiam, adipisci nesciunt.</p><p>Laborum placeat <b>adipisci ex porro</b>, labore impedit sed nulla perferendis architecto quis vitae laudantium animi, dolorum repudiandae incidunt eaque! Possimus corporis voluptatum aut velit similique facilis fugit quis eaque, fugiat inventore beatae minus nemo soluta quia earum, atque accusamus!</p>",
      postThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-vinallonga.jpg",
      postImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-vinallonga1.jpg",
      postLink: "article-link1"
    },
    {
      postTitle: "Ullam provident",
      postAbstract: "Lorem ipsum dolor sit amet eveniet, consectetur adipisicing elit. Numquam repudiandae nam dolore.",
      postContent: "<p>Possimus ipsam, aliquid voluptate ab quaerat mollitia deleniti recusandae, voluptas quisquam consequatur porro nesciunt sed commodi reprehenderit, amet earum sapiente sunt, temporibus aut <b>consectetur eligendi</b> laudantium. Cum, eius! Optio tempora unde, non quasi fugit, eos corporis iusto dolores, quam suscipit ipsum cum nesciunt incidunt atque in recusandae amet totam ea fuga! Aliquid similique exercitationem accusamus, et vitae molestiae voluptatum quo earum doloribus <b>nisi hic nesciunt</b>, blanditiis dignissimos. Quia veniam neque facere nesciunt quibusdam distinctio architecto perferendis veritatis? Laboriosam architecto culpa hic aspernatur ratione possimus nostrum mollitia, soluta aliquid reiciendis doloribus.</p>",
      postThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-urban.jpg",
      postImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-urban4.jpg",
      postLink: "article-link1"
    }
  ];
  
  
  /*
  =====================
  =====================
  Thumbs
  =====================
  =====================
  */
  //Loop length:
  function displayThumbs(cocktails){
      console.log("patati")
    //Empty container:
    $(".posts-box").empty();
    console.log(cocktails)
    console.log(cocktails[0])
    //Loop:
    for (i=0; i<cocktails.length; i++) {
        console.log(cocktails[i])
      //Create thumb structure:
      var listItem =
        '<li>'+
          '<div class="card">'+
            '<a class="button" href="" data-obj="'+i+'">'+
              '<img src="'+cocktails[i].strDrinkThumb+'" alt="">'+
            '</a>'+
            '<div>'+
              '<h3>'+cocktails[i].strDrink+'</h3>'+
              '<p>'+cocktails[i].strInstructions+'</p>'+
            '</div>'+
            '<div>'+
              '<a class="button" href="" data-obj="'+i+'">Explore</a>'+
            '</div>'+
          '</div>'+
        '</li>';
      //Append thumb:
      $(".posts-box").append(listItem);
    };
  }
  
  
  
  /*
  =====================
  =====================
  Inner post
  =====================
  =====================
  */
  var thisElement = 0;
  
  function innerContent(content){
    $(".inner-img").attr("src",cocktails[content].postImg);
    $(".inner-title").html(cocktails[content].postTitle);
    $(".inner-text").html(cocktails[content].postContent);
  };
  
  //Open post:
  $(".button").click(function(e){
    e.preventDefault();
    thisElement = $(this).attr("data-obj");
    innerContent(thisElement);
    $(".modal").css({"display":"block"});
    dissBtn();
  });
  
  //Close post:
  $(".close-post, .modal-sandbox").click(function(){
    $(".modal").css({"display":"none"});
  });
  
  //Next post:
  $(".next-post").click(function(e){
    e.preventDefault();
    if (thisElement<postLength-1) {
      thisElement = parseInt(thisElement) + 1;
      innerContent(thisElement);
      dissBtn();
    };
  });
  
  //Prev post:
  $(".prev-post").click(function(e){
    e.preventDefault();
    if (thisElement>0) {
      thisElement = parseInt(thisElement) - 1;
      innerContent(thisElement);
      dissBtn();
    };
  });
  
  //Button disable:
  function dissBtn(){
    $(".prev-post, .next-post").removeClass("disabled");
    if (thisElement<=0){
      $(".prev-post").addClass("disabled");
    }
    else if (thisElement>=postLength-1){
      $(".next-post").addClass("disabled");
    };
  };
  