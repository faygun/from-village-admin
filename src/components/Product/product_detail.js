import React,{Component} from 'react';
import {fetchProduct, deleteProduct} from '../../actions/Product';
import {connect} from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Col, Input, FormText, Button } from "reactstrap";

class ProductDetail extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         product:{}
    //     }
    // }
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
    renderProductTypes(){
        //REducer dan type lar alınacak.
        let types = [{key:1, value:"Jar"}, {key:2, value:"Meat"}, {key:3, value:"Vegetable"}]
        return _.map(types, type=>{
            return(<option key={type.key}>{type.value}</option>)
        });
    }
    render(){
        console.log(this.props.product);
        if(!this.props.product){
            return (<div>Loading...</div>);
        }

        return(
            
            <Form>
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
                <Col sm={2} >
                    <CustomInput type="checkbox" id="active" onChange={(e)=>{
                        e.target.checked = e.target.checked
                    }} checked={this.props.product.active} label=""/>
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
                <Input type="text" name="metaKeyword" id="metaKeyword" placeholder="Please insert a keyword" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="metaDescription" sm={2}>Meta Description</Label>
              <Col sm={10}>
                <Input type="text" name="metaDescription" id="metaDescription" placeholder="Please insert a description" />
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
                    <Button colSpan={1}>Save</Button>
                    <Button>Cancel</Button>
                </Col>
            </FormGroup>
          </Form>
        );
    }
}

function mapStateToProps(state){
    return{product : state.productDetail};
}

export default connect(mapStateToProps, {fetchProduct, deleteProduct})(ProductDetail);