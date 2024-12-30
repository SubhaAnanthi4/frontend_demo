import { useNavigate } from "react-router-dom";
function Homee()
{
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/Home")
    }
    return(
    <div className='app-container'>
          <div className='maincont'>
            <h1>Ice Scream</h1>
            <h3> You can't buy happiness, but you can buy ice cream, and that's pretty close.</h3>
          </div>
          <button className="explore" onClick={handleClick}> Explore Our Flavours</button>
          <div className="types">
            <div className="typeu">
          <img className="type" alt="Cones" src="https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMzcyNDkwNzUzOTE2/ice-cream-flavors-ranked-jpg.jpg"></img>
          <h4>Cones</h4>
          </div>
          <div className="typeu">
          <img className="type" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumq7BbGWuyRZD8U-5rN-9qlstSSKWeBFYQA&s"></img>
          <h4>Softy</h4>
          </div>
          <div className="typeu">
          <img className="type" src="https://www.biggerbolderbaking.com/wp-content/uploads/2019/06/Strawberry-Shortcake-Ice-Cream-Bar-thumbnail.jpg"></img>
          <h4>Bars</h4>
          </div>
          </div>
          </div>
        )

}
export default Homee;
