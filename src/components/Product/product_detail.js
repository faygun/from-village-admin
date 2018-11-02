import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {fetchProduct, deleteProduct, createOrUpdateProduct} from '../../actions/Product';
import {connect} from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Col, Input, FormText, Button, Alert } from "reactstrap";
import AlertMessage from '../Common/alert';
import { AlertType } from '../../helper/user/helper';
import { append } from '../../helper/common';

class ProductDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked:false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchProduct(id);
        console.log("did mount")
    }
     onDeleteClick(){
        const {id} = this.props.match.params
        this.props.deleteProduct(id,()=>{
            this.props.history.push("/");
        });
    }
    renderProductStatus(){
      let states = [{key:0, value:"Yes"}, {key:1, value:"No"}]
      let value = this.props.product.active ? 0 : 1;
        return _.map(states, status=>{
            return(<option key={status.key}  {... (value === status.key  ? {selected:"selected"} : {})} value={status.key}>{status.value}</option>)
        });
    }
    renderProductTypes(){
        //REducer dan type lar alınacak.
        let types = [{key:1, value:"Jar"}, {key:2, value:"Meat"}, {key:3, value:"Vegetable"}]
        return _.map(types, type=>{
            return(<option key={type.key}  {... (this.props.product.type === type.value ? {selected:"selected"} : {})} value={type.key}>{type.value}</option>)
        });
    }
    showMessage(){
        append(<AlertMessage alertType={AlertType.Success} message="Sucess hedasda fdgfdgdf" />, ".result")
    }
    handleSubmit(event){
      event.preventDefault();
      const data = new FormData(event.target);
      var request = {
        name : data.get("name"),
        type : data.get("type"),
        arrivaDate : data.get("arrivaDate"),
        price : data.get("price"),
        active : data.get("active"),
        description : data.get("description"),
        metaDescription : data.get("metaDescription"),
        metaKeyword : data.get("metaKeyword")
      };
      console.log(event);
      console.log(event.target);
      this.props.createOrUpdateProduct(request, ()=>{
          //event.target.append(this.showMessage());
          ReactDOM.render(<AlertMessage alertType={AlertType.Success} message="Sucess hedasda fdgfdgdf" />, document.querySelector(".result"))
          
      });
      
    }
    render(){
        if(!this.props.product){
            return (<div>Loading...</div>);
        }

        return(
            <Form onSubmit={this.handleSubmit} className="myForm">
           <FormGroup row>
              <Label for="type" sm={2}>Type</Label>
              <Col sm={10}>
                <Input type="select" name="type" id="type">
                    {this.renderProductTypes()}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" value={this.props.product.name} id="name" placeholder="Please insert a product name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="description" sm={2}>Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="description" id="description" value={this.props.product.description} />
              </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="active" sm={2}>Active</Label>
                <Col sm={10}>
                <Input type="select" name="active" id="active">
                  {this.renderProductStatus()}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>Image</Label>
              <Col sm={10}>
                <CustomInput type="file" id="image" name="image" />
                <FormText color="muted">
                  Only png or jpeg.
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="metaKeyword" sm={2}>Meta Keyword</Label>
              <Col sm={10}>
                <Input type="text" name="metaKeyword" id="metaKeyword" placeholder="Please insert a keyword" value={this.props.product.metaKeyword} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="metaDescription" sm={2}>Meta Description</Label>
              <Col sm={10}>
                <Input type="text" name="metaDescription" id="metaDescription" placeholder="Please insert a description" value={this.props.product.metaDescription} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="price" sm={2}>Price</Label>
              <Col sm={10}>
                <Input type="text" name="price" id="price" value={this.props.product.price}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="arrivaDate" sm={2}>Arriva Date</Label>
              <Col sm={10}>
                <Input type="text"  name="arrivaDate" id="arrivaDate" value={this.props.product.arrivaDate} />
              </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={{ size: 10, offset: 6 }}>
                    <Button color="primary" className="mr-3" colSpan={1}>Save</Button>
                    <Button color="danger" onClick={()=>{
                      this.props.history.push('/');
                    }}>Cancel</Button>
                </Col>
            </FormGroup>
            <div className="result">

            </div>
          </Form>
        );
    }
}

function mapStateToProps(state){
    return{product : state.productDetail};
}

export default connect(mapStateToProps, {fetchProduct, deleteProduct, createOrUpdateProduct})(ProductDetail);