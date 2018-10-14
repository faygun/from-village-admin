import _ from 'lodash';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/Product';
import { logout } from "../../actions/Logout";
import {Table} from "reactstrap";

class ProductList extends Component{
    componentDidMount(){
        this.props.fetchProducts();
    }

    renderProducts(){
        return _.map(this.props.products, product =>{
            return(
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>
                            <Link to={`/detail/${product.id}`}>
                                {product.name}
                            </Link>
                        </td>
                        <td>{product.type}</td>
                        <td>{product.arrivaDate}</td>
                        <td>{product.price}</td>
                        <td>{product.active ? "yes" : "no"}</td>
                        <td>{product.updateDate}</td>
                    </tr>       
            );
        });
    }
    render(){
        return(
        <div>
            <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                    Add a Product
                </Link>
            </div>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Arriva Date</th>
                        <th>Price</th>
                        <th>Active</th>
                        <th>Update Date</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProducts()}
                </tbody>
            </Table>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {products:state.products};
}

export default connect(mapStateToProps, {fetchProducts, logout})(ProductList);