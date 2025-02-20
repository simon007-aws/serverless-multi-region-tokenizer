/*! 
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
*/

export namespace Constants {
    //this DynamoDB table will be created
    export const ddbTokenTable : string = "sensitive-data";
    //this is the partition key. The key TTL will be used to hold automatic expiry data
    export const ddbPartitionKey : string = "tokenId";

    //you need to MANUALLY create the multi-region key and replicate it to your secondary region using the KMS console,
    //https://ap-southeast-2.console.aws.amazon.com/kms/home?region=ap-southeast-2#/kms/keys/create (or choose another region)
    //if you do not provide the Key Alias below, no permissions will be added for the Lambdas to access the key
    export const kmsMultiRegionKeyId : string = "mrk-92f783ae30e84899926644ce3d7e62d6";
    export const kmsMultiRegionKeyAlias : string = "sensitive-data-cmk"

    export const replicaRegion : string = 'ap-southeast-1';  //Singapore, note that primary region is set by CDK default

    //if you don't have a Route53 subdomain to use, don't deploy the Tokenizer-DNS
    export const myApiSubdomain : string = "";  //usually 'api'
    export const myDomainName : string = "";
}