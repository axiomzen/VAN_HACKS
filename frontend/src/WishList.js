import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {
  fetchItemTypes,
  submitShoppingListItem,
  fetchShoppingListItems
} from './APIService';

class WishList extends Component {
  state = {
    clientId: null,
    itemTypes: [],
    selectedItemType: '',
    shoppingList: []
  };
  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.setState({
      clientId: id
    });
    this.updateShoppingListItems(id);
    fetchItemTypes.then(itemTypes => {
      this.setState({
        itemTypes
      });
    });
  };
  updateShoppingListItems = clientId => {
    fetchShoppingListItems(clientId).then(res => {
      this.setState({
        shoppingList: res
      });
    });
  };
  handleChange = ({ target: { value } }) => {
    console.log('changed to', value);
    this.setState({
      selectedItemType: value
    });
  };
  handleClick = () => {
    submitShoppingListItem(
      this.state.clientId,
      this.state.selectedItemType
    ).then(() => {
      this.updateShoppingListItems(this.state.clientId);
    });
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader title="Add Items to Wish List" />
          <CardContent>
            <form className="" autoComplete="off">
              <div>
                <select
                  name="carlist"
                  form="carform"
                  onChange={this.handleChange}
                >
                  <option value="">Select Item Type</option>
                  {this.state.itemTypes.map(({ item_category }) => (
                    <option key={item_category} value={item_category}>
                      {item_category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Add Details</label>
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <button type="button" onClick={this.handleClick}>
                  Add Item To list
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Existing Wish List" />
          <CardContent>
            {this.state.shoppingList.map(item => (
              <div key={item.id}> {item.item_category} </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default WishList;
