import React from 'react'


import './Card.css'

const Card = ({ data }) => {
    console.log(data)



    return (
     
<>
            {
             
                    
             
                        <div className="card deal_card_margin">
                            <div className="overflow">

                                <img src={require("../Img/"+data.image)} alt="fit" />
                            </div>
                            <div className="second_section">
                                <div className="small_box">
                                    <img src={"../Img/"+ data.small}alt="small" />
                                    <div className="sub_title_malvano">{data.topTitle}</div>
                                </div>
                                <p className='discription'>
                                    {data.para}
                                </p>
                                <div className="percentage_closein d-flex">
                                    <div className="percentage">
                                        <p className='deal_percentage'>Percentage raised</p>
                                        <div className="percent_numb">
                                            {data.percentage}</div></div>
                                    <div className="close_in">
                                        <p className='deal_close_in'>Close in</p>

                                        <div className="close_days"> {data.days}</div>

                                    </div>
                                </div>

                                <div className="amount_per_view_more">
                                    <div className="amount-per-left">
                                        <p className='amount_per_title'>
                                            Amount per subscriber
                                        </p>
                                        <div className="amount_in_rs">
                                            <div className="amount_num">{data.amount}</div>
                                        </div>
                                        <p className='num_subscriber_title'>
                                            Number of subscriber
                                        </p>
                                        <div className="number_of_subscriber">
                                          {data.subscriber}
                                        </div>


                                    </div>

                                    <div className="amount-per-right">
                                        <button className='deal_button'>View more</button>
                                    </div>


                                </div>
                            </div>

                        </div>




                   
            }







</> )
}

export default Card
