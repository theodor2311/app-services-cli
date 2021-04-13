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

// QuotaSummaryAllOf struct for QuotaSummaryAllOf
type QuotaSummaryAllOf struct {
	Allowed              int32   `json:"allowed"`
	AvailabilityZoneType string  `json:"availability_zone_type"`
	Byoc                 bool    `json:"byoc"`
	OrganizationId       *string `json:"organization_id,omitempty"`
	Reserved             int32   `json:"reserved"`
	ResourceName         string  `json:"resource_name"`
	ResourceType         string  `json:"resource_type"`
}

// NewQuotaSummaryAllOf instantiates a new QuotaSummaryAllOf object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewQuotaSummaryAllOf(allowed int32, availabilityZoneType string, byoc bool, reserved int32, resourceName string, resourceType string) *QuotaSummaryAllOf {
	this := QuotaSummaryAllOf{}
	this.Allowed = allowed
	this.AvailabilityZoneType = availabilityZoneType
	this.Byoc = byoc
	this.Reserved = reserved
	this.ResourceName = resourceName
	this.ResourceType = resourceType
	return &this
}

// NewQuotaSummaryAllOfWithDefaults instantiates a new QuotaSummaryAllOf object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewQuotaSummaryAllOfWithDefaults() *QuotaSummaryAllOf {
	this := QuotaSummaryAllOf{}
	return &this
}

// GetAllowed returns the Allowed field value
func (o *QuotaSummaryAllOf) GetAllowed() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Allowed
}

// GetAllowedOk returns a tuple with the Allowed field value
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetAllowedOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Allowed, true
}

// SetAllowed sets field value
func (o *QuotaSummaryAllOf) SetAllowed(v int32) {
	o.Allowed = v
}

// GetAvailabilityZoneType returns the AvailabilityZoneType field value
func (o *QuotaSummaryAllOf) GetAvailabilityZoneType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.AvailabilityZoneType
}

// GetAvailabilityZoneTypeOk returns a tuple with the AvailabilityZoneType field value
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetAvailabilityZoneTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.AvailabilityZoneType, true
}

// SetAvailabilityZoneType sets field value
func (o *QuotaSummaryAllOf) SetAvailabilityZoneType(v string) {
	o.AvailabilityZoneType = v
}

// GetByoc returns the Byoc field value
func (o *QuotaSummaryAllOf) GetByoc() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.Byoc
}

// GetByocOk returns a tuple with the Byoc field value
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetByocOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Byoc, true
}

// SetByoc sets field value
func (o *QuotaSummaryAllOf) SetByoc(v bool) {
	o.Byoc = v
}

// GetOrganizationId returns the OrganizationId field value if set, zero value otherwise.
func (o *QuotaSummaryAllOf) GetOrganizationId() string {
	if o == nil || o.OrganizationId == nil {
		var ret string
		return ret
	}
	return *o.OrganizationId
}

// GetOrganizationIdOk returns a tuple with the OrganizationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetOrganizationIdOk() (*string, bool) {
	if o == nil || o.OrganizationId == nil {
		return nil, false
	}
	return o.OrganizationId, true
}

// HasOrganizationId returns a boolean if a field has been set.
func (o *QuotaSummaryAllOf) HasOrganizationId() bool {
	if o != nil && o.OrganizationId != nil {
		return true
	}

	return false
}

// SetOrganizationId gets a reference to the given string and assigns it to the OrganizationId field.
func (o *QuotaSummaryAllOf) SetOrganizationId(v string) {
	o.OrganizationId = &v
}

// GetReserved returns the Reserved field value
func (o *QuotaSummaryAllOf) GetReserved() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Reserved
}

// GetReservedOk returns a tuple with the Reserved field value
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetReservedOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Reserved, true
}

// SetReserved sets field value
func (o *QuotaSummaryAllOf) SetReserved(v int32) {
	o.Reserved = v
}

// GetResourceName returns the ResourceName field value
func (o *QuotaSummaryAllOf) GetResourceName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ResourceName
}

// GetResourceNameOk returns a tuple with the ResourceName field value
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetResourceNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ResourceName, true
}

// SetResourceName sets field value
func (o *QuotaSummaryAllOf) SetResourceName(v string) {
	o.ResourceName = v
}

// GetResourceType returns the ResourceType field value
func (o *QuotaSummaryAllOf) GetResourceType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ResourceType
}

// GetResourceTypeOk returns a tuple with the ResourceType field value
// and a boolean to check if the value has been set.
func (o *QuotaSummaryAllOf) GetResourceTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ResourceType, true
}

// SetResourceType sets field value
func (o *QuotaSummaryAllOf) SetResourceType(v string) {
	o.ResourceType = v
}

func (o QuotaSummaryAllOf) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["allowed"] = o.Allowed
	}
	if true {
		toSerialize["availability_zone_type"] = o.AvailabilityZoneType
	}
	if true {
		toSerialize["byoc"] = o.Byoc
	}
	if o.OrganizationId != nil {
		toSerialize["organization_id"] = o.OrganizationId
	}
	if true {
		toSerialize["reserved"] = o.Reserved
	}
	if true {
		toSerialize["resource_name"] = o.ResourceName
	}
	if true {
		toSerialize["resource_type"] = o.ResourceType
	}
	return json.Marshal(toSerialize)
}

type NullableQuotaSummaryAllOf struct {
	value *QuotaSummaryAllOf
	isSet bool
}

func (v NullableQuotaSummaryAllOf) Get() *QuotaSummaryAllOf {
	return v.value
}

func (v *NullableQuotaSummaryAllOf) Set(val *QuotaSummaryAllOf) {
	v.value = val
	v.isSet = true
}

func (v NullableQuotaSummaryAllOf) IsSet() bool {
	return v.isSet
}

func (v *NullableQuotaSummaryAllOf) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableQuotaSummaryAllOf(val *QuotaSummaryAllOf) *NullableQuotaSummaryAllOf {
	return &NullableQuotaSummaryAllOf{value: val, isSet: true}
}

func (v NullableQuotaSummaryAllOf) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableQuotaSummaryAllOf) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}