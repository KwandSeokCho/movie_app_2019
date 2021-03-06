import React from 'react';
import PropTypes from 'prop-types';
 
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.9
    
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 2.9
  },
  { 
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 1.9
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.9
  }
];


function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />
// }

// propTypes 라고 정확히 타이핑 해야 로그로 확인이가능함
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  // rating: PropTypes.string.isRequired,
}

// fuinction COmponent
// function App() {
//   return (
//     <div>
//       <h1>Hello!!!</h1>
      
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}

//       {/* {foodILike.map(renderFood) } */}


//     </div>
//   );
// }

// Class Pomponent
class App extends React.Component{

  constructor(props){
    super(props);
    console.log('constructor :: ');
  }

  componentWillMount(){
    console.log('componentWillMount :: ');
  }
  componentDidMount(){
    setTimeout( ()=> {
      this.setState({isLoading : false}) 
    },1000);
    console.log('componentDidMount :: component rendered');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate :: I just Update!');
  }
  componentWillMount(){
    console.log('componentWillMount :: bye bye');
  }

  state = {
    isLoading : true
  }


  // setState를 호출하면 React는 state를 refresh하고 또한 render function을 호출한다.
  // 그러나 react는  변화가 있는 부분만 render 된다.
  render(){
    console.log('render');
    // ES6 문법을 통해 this.state를 계속 안쓰고 미리 선언
    const {isLoading} = this.state; 
    return (
      <div>
        {isLoading ? "Loading.. " : "We are ready" }
      </div>
    ) 
  }
}


export default App;
