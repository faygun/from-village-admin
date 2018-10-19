import React,{Component} from 'react';
import {connect} from 'react-redux';
import { login } from "../../actions/Login/";
import { isLogin } from '../../helper/user/helper';
import { FormFeedback, Input } from "reactstrap";
class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            userName : "",
            userNameError:"Enter an user name",
            userValid : true,
            password : "",
            passwordError:"Enter an user name",
            passwordValid : true
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
                            <Input
                                name="user_id"
                                placeholder = "e-mail"
                                id="user_id"
                                type="text"
                                className="form-control"
                                value={this.state.userName}
                                onBlur={(e)=>{
                                    if(!e.target.value){
                                        this.setState({userValid : false})
                                    }
                                    else{
                                        this.setState({userValid : true})
                                    }
                                        
                                }}
                                onChange={(e)=>{
                                    this.setState({userValid : true})
                                    this.setState({userName : e.target.value}) 
                                }}
                                invalid={!this.state.userValid}
                            />
                            <FormFeedback>{this.state.userNameError}</FormFeedback>
                        </div> 
                        <div className="form-group">
                            <Input
                                name="password"
                                placeholder="password"
                                id="password"
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={(e)=>{
                                    this.setState({passwordValid : true})
                                    this.setState({password : e.target.value}) 
                                }}

                                onBlur={(e)=>{
                                    if(!e.target.value){
                                        this.setState({passwordValid : false})
                                    }
                                    else{
                                        this.setState({passwordValid : true})
                                    }
                                        
                                }}
                                invalid={!this.state.passwordValid}
                            />
                            <FormFeedback>{this.state.passwordError}</FormFeedback>
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
    
    validate(request){
        var isValid = true;
        if(!request.userName){
            this.setState({userNameError:"Enter an user name"})
            isValid = false;
        }
        if(!request.password){
            this.setState({passwordError:"Enter a password"})
            isValid = false;
        }

        return isValid;
    }

    onSubmit(e){
       e.preventDefault();

        const request = {
            userName : this.state.userName,
            password : this.state.password
        };
        
        if(this.validate(request) == false)
            return;

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

// function validate(values){

//     const errors = {};

//     if(!values.user_id){
//         errors.title = "Enter an user name";
//     }
    
//     if(!values.password){
//         errors.categories = "Enter a password";
//     }

//     return errors;
// }


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({login}, dispatch);
// }

export default connect(null, {login})(Login);