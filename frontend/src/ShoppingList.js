import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {
  fetchItemTypes,
  submitShoppingListItem,
  fetchShoppingListItems
} from './APIService';

class ShoppingList extends Component {
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
  submitItem = () => {
    submitShoppingListItem(
      this.state.clientId,
      this.state.selectedItemType
    ).then(() => {
      this.updateShoppingListItems(this.state.clientId);
    });
  };
  render() {
    return (
      <div className="form">
        <Card>
          <CardHeader title="Wish List" />
          <CardContent>
            <form className="add-item" autoComplete="off">
              <div>
                <Select
                  name="carlist"
                  form="carform"
                  onChange={this.handleChange}
                  value={this.state.selectedItemType || 'TEST'}
                >
                  <MenuItem value="TEST">Select Item Type</MenuItem>
                  {this.state.itemTypes.map(({ item_category, id }) => (
                    <MenuItem key={item_category} value={id}>
                      {item_category}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                <Button
                  type="button"
                  variant="raised"
                  color="primary"
                  onClick={this.submitItem}
                  size="small"
                  variant="flat"
                >
                  Add To list
                </Button>
              </div>
            </form>
            <div className="mg">
              {this.state.shoppingList.map(item => {
                const type = this.state.itemTypes[item.item_type - 1];
                return (
                  <div className="item">
                    <ListItem key={item.id}>
                      {type ? type.item_category : '??'}
                    </ListItem>
                  </div>
                );
              })}
            </div>
            <div className="mg">
              <Button
                type="button"
                variant="raised"
                color="primary"
                onClick={() => {}}
              >
                Submit Wish List
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ShoppingList;
