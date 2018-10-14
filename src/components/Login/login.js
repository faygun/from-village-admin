import React,{Component} from 'react';
import {connect} from 'react-redux';
import { login } from "../../actions/Login/";
import { isLogin } from '../../helper/user/helper';
class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            userName : "",
            password : ""
        }
    }
    
    componentDidMount(){
        if(isLogin()){
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="login-popup-wrap new_login_popup">
                <div className="login-popup-heading text-center">
                    <h4><i className="fa fa-lock" aria-hidden="true"></i> Login </h4>                        
                </div> 
              
                <form id="loginMember" role="form" method="post" onSubmit={this.onSubmit.bind(this)}>
                    <div className="login-popup-wrap new_login_popup"> 
                        <div className="form-group">
                            <input
                                name="user_id"
                                placeholder = "e-mail"
                                id="user_id"
                                type="text"
                                className="form-control"
                                onChange={(e)=>{
                                    this.setState({userName : e.target.value}) 
                                }}
                            />
                            <label className="error" id="errUser"></label>
                        </div> 
                        <div className="form-group">
                            <input
                                name="password"
                                placeholder="password"
                                id="password"
                                type="password"
                                className="form-control"
                                onChange={(e)=>{
                                    this.setState({password : e.target.value}) 
                                }}
                            />
                            <label className="error" id="errPassword"></label>
                        </div> 
                        <label className="error" id="lblErrorMessage"></label>
                        <div className="form-group">
                            <button type="submit" className="btn-default login-popup-btn text-center" name="submit" value="1">Login</button>
                        </div>
                    </div>
                </form>
        </div>
        );
    }
    
    onSubmit(e){
       e.preventDefault();

        const request = {
            userName : this.state.userName,
            password : this.state.password
        };
        this.props.login(request, (response)=>{
           console.log(response);
            if($.isEmptyObject(response) == false){
                this.props.history.push('/');
            }else{
                showErrorMessage();
            }
        });

        // this.props.createPost(values, ()=> {
        //     this.props.history.push('/');
        // });
    }
}

function showErrorMessage(){
    document.getElementById("lblErrorMessage").textContent = "UserName or Password not match";
}

function validate(values){

    const errors = {};

    if(!values.user_id){
        errors.title = "Enter an user name";
    }
    
    if(!values.password){
        errors.categories = "Enter a password";
    }

    return errors;
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({login}, dispatch);
// }

export default connect(null, {login})(Login);