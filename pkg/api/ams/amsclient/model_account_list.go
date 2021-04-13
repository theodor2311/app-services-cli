/*
 * Account Management Service API
 *
 * Manage user subscriptions and clusters
 *
 * API version: 0.0.1
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package amsclient

import (
	"encoding/json"
)

// AccountList struct for AccountList
type AccountList struct {
	Kind  string    `json:"kind"`
	Page  int32     `json:"page"`
	Size  int32     `json:"size"`
	Total int32     `json:"total"`
	Items []Account `json:"items"`
}

// NewAccountList instantiates a new AccountList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAccountList(kind string, page int32, size int32, total int32, items []Account) *AccountList {
	this := AccountList{}
	this.Kind = kind
	this.Page = page
	this.Size = size
	this.Total = total
	this.Items = items
	return &this
}

// NewAccountListWithDefaults instantiates a new AccountList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAccountListWithDefaults() *AccountList {
	this := AccountList{}
	return &this
}

// GetKind returns the Kind field value
func (o *AccountList) GetKind() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Kind
}

// GetKindOk returns a tuple with the Kind field value
// and a boolean to check if the value has been set.
func (o *AccountList) GetKindOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Kind, true
}

// SetKind sets field value
func (o *AccountList) SetKind(v string) {
	o.Kind = v
}

// GetPage returns the Page field value
func (o *AccountList) GetPage() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Page
}

// GetPageOk returns a tuple with the Page field value
// and a boolean to check if the value has been set.
func (o *AccountList) GetPageOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Page, true
}

// SetPage sets field value
func (o *AccountList) SetPage(v int32) {
	o.Page = v
}

// GetSize returns the Size field value
func (o *AccountList) GetSize() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Size
}

// GetSizeOk returns a tuple with the Size field value
// and a boolean to check if the value has been set.
func (o *AccountList) GetSizeOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Size, true
}

// SetSize sets field value
func (o *AccountList) SetSize(v int32) {
	o.Size = v
}

// GetTotal returns the Total field value
func (o *AccountList) GetTotal() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Total
}

// GetTotalOk returns a tuple with the Total field value
// and a boolean to check if the value has been set.
func (o *AccountList) GetTotalOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Total, true
}

// SetTotal sets field value
func (o *AccountList) SetTotal(v int32) {
	o.Total = v
}

// GetItems returns the Items field value
func (o *AccountList) GetItems() []Account {
	if o == nil {
		var ret []Account
		return ret
	}

	return o.Items
}

// GetItemsOk returns a tuple with the Items field value
// and a boolean to check if the value has been set.
func (o *AccountList) GetItemsOk() (*[]Account, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Items, true
}

// SetItems sets field value
func (o *AccountList) SetItems(v []Account) {
	o.Items = v
}

func (o AccountList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["kind"] = o.Kind
	}
	if true {
		toSerialize["page"] = o.Page
	}
	if true {
		toSerialize["size"] = o.Size
	}
	if true {
		toSerialize["total"] = o.Total
	}
	if true {
		toSerialize["items"] = o.Items
	}
	return json.Marshal(toSerialize)
}

type NullableAccountList struct {
	value *AccountList
	isSet bool
}

func (v NullableAccountList) Get() *AccountList {
	return v.value
}

func (v *NullableAccountList) Set(val *AccountList) {
	v.value = val
	v.isSet = true
}

func (v NullableAccountList) IsSet() bool {
	return v.isSet
}

func (v *NullableAccountList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAccountList(val *AccountList) *NullableAccountList {
	return &NullableAccountList{value: val, isSet: true}
}

func (v NullableAccountList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAccountList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}