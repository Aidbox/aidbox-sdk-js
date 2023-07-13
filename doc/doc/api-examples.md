---
outline: deep
---
# API
Description Intro

Что в этой секции должно быть

Input params in the general case depends on Resource that we want to create

[resource type](http://hl7.org/fhir/resourcelist.html),
[FHIR version](http://hl7.org/fhir/directory.html),

## Auth
Section Description
### Basic
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel maximus arcu. Aliquam consequat erat ut leo rutrum, vel vulputate tortor vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum mi sodales ullamcorper vestibulum. Duis a turpis turpis. Praesent augue lectus, iaculis at ante sodales, pellentesque efficitur neque. Sed tempor in ligula in dictum. Cras eu velit in augue finibus dictum.
### Client Credentials
Vivamus euismod sit amet massa eu interdum. Praesent egestas tellus id arcu placerat, vel luctus tellus laoreet. Sed lacinia ante quis maximus scelerisque. Integer euismod, lectus vitae malesuada aliquam, massa massa pellentesque risus, sed faucibus purus libero at lectus. Quisque ultrices vestibulum elit non egestas. Curabitur et sem justo. Maecenas condimentum nisi porttitor justo iaculis, sit amet accumsan quam pellentesque.
### Resource Owner
Pellentesque nisl est, auctor non porttitor nec, volutpat eu sapien. Suspendisse ac nisl vel quam vehicula vulputate at vel justo. Cras ullamcorper luctus ante, sed accumsan velit imperdiet at. Cras dictum, ante a ultrices rhoncus, dolor velit congue justo, eget pulvinar odio nunc non leo. Integer nisl mi, pretium sit amet arcu nec, sagittis molestie velit. Aenean tempus eros nec felis condimentum congue. In commodo tortor felis, nec ullamcorper mauris commodo in. Duis ultrices lorem eget magna lacinia, sit amet dapibus tellus lobortis. Mauris in vestibulum diam. Integer tristique at magna id ultrices. Proin efficitur nunc imperdiet, iaculis enim id, ultrices mauris. Vivamus erat magna, interdum nec pellentesque sed, dictum id urna. Quisque sit amet varius lorem, eget placerat lectus.
### Authorization Code
Curabitur et tortor ac purus efficitur imperdiet ac a orci. Praesent eu vestibulum augue, sed molestie orci. Vivamus vitae turpis consectetur, semper arcu quis, interdum est. Mauris ut mauris enim. Duis suscipit dolor sit amet turpis facilisis, accumsan vehicula nisi mollis. Proin ac pellentesque turpis. Duis faucibus, tortor vel consequat dapibus, orci libero egestas sem, eleifend gravida enim sem non magna. Fusce libero lorem, mollis quis viverra at, pharetra ut dui. Quisque a vehicula urna, ut ornare diam. Sed eleifend tellus sed tellus malesuada, vitae ultrices augue tempus. Vestibulum tincidunt nisi in turpis condimentum lacinia. Etiam lacus lectus, tincidunt ut magna et, tincidunt euismod mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
### Implicit
Suspendisse placerat facilisis lacus ut pellentesque. Morbi finibus felis eu molestie venenatis. Fusce bibendum elementum dui, eu ullamcorper velit molestie luctus. Maecenas eros ipsum, tempus eu leo non, eleifend consequat urna. Nunc in metus et orci porta dignissim vel nec neque. Vivamus gravida semper dui, ac pharetra metus. Aliquam mollis pharetra nulla id tempus. Maecenas mauris sem, pellentesque vitae ligula vitae, pulvinar euismod turpis. Sed sollicitudin, magna non porta volutpat, velit risus imperdiet magna, vitae iaculis quam eros et sapien. Cras vitae aliquam sapien, nec elementum magna. Mauris viverra euismod lorem, nec finibus turpis condimentum non. Nulla cursus mi eros, et vehicula sem iaculis ac. Nunc eleifend nec odio id suscipit. Praesent neque orci, mattis a condimentum eget, lobortis ut ipsum.
### SMART on FHIR
Suspendisse placerat facilisis lacus ut pellentesque. Morbi finibus felis eu molestie venenatis. Fusce bibendum elementum dui, eu ullamcorper velit molestie luctus. Maecenas eros ipsum, tempus eu leo non, eleifend consequat urna. Nunc in metus et orci porta dignissim vel nec neque. Vivamus gravida semper dui, ac pharetra metus. Aliquam mollis pharetra nulla id tempus. Maecenas mauris sem, pellentesque vitae ligula vitae, pulvinar euismod turpis. Sed sollicitudin, magna non porta volutpat, velit risus imperdiet magna, vitae iaculis quam eros et sapien. Cras vitae aliquam sapien, nec elementum magna. Mauris viverra euismod lorem, nec finibus turpis condimentum non. Nulla cursus mi eros, et vehicula sem iaculis ac. Nunc eleifend nec odio id suscipit. Praesent neque orci, mattis a condimentum eget, lobortis ut ipsum.

## FHIR CRUD
### Fetch Resource
```typescript jsx
await aidbox.getResource("Patient", "id")
```

### Create Resource





```typescript jsx
await aidbox.createResource("Patient", {
  "name" : [{ 
    "use" : "official", 
    "family" : "Chalmers", 
    "given" : ["Peter", "James"] 
  }],
  "gender" : "male",
  "birthDate" : "1974-12-25",
  "address" : [{
    "use" : "home",
    "type" : "physical",
    "text" : "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
    "line" : ["534 Erewhon St"],
    "city" : "PleasantVille",
    "district" : "Rainbow",
    "state" : "Vic",
    "postalCode" : "3999",
    "period" : { "start" : "1974-12-25" }
  }],
  "managingOrganization" : {
    "reference" : "Organization/1"
  }
})
```

### Update Resource
```typescript jsx
await aidbox.patchResource("Patient", "c58f29eb-f28d-67c1-0400-9af3aba3d58c", {
  "gender" : "femail"
})
```

### Delete Resource
```typescript jsx
await aidbox.deleteResource("Patient", "c58f29eb-f28d-67c1-0400-9af3aba3d58c")
```

## Filter
### Fetch List
```typescript jsx
await aidbox.getResources("Patient")
```

### Limit
```typescript jsx
await aidbox.getResources("Patient")
  .count(10)
```

### Pagination
```typescript jsx
await aidbox.getResources("Patient")
  .count(10)
  .page(3)
```

### Order by
```typescript jsx
await aidbox.getResources("Patient")
  .order('birthDate', 'acs')
```

### Selective attributes
```typescript jsx
await aidbox.getResources("Patient")
  .elements(['active', 'name', 'address'])
```

### Profiles
```typescript jsx
await aidbox.getResources("Patient")
```

### Fulltext search
```typescript jsx
await aidbox.getResources("Patient")
```

## Access Control
### Provide access to ...
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel maximus arcu. Aliquam consequat erat ut leo rutrum, vel vulputate tortor vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum mi sodales ullamcorper vestibulum. Duis a turpis turpis. Praesent augue lectus, iaculis at ante sodales, pellentesque efficitur neque. Sed tempor in ligula in dictum. Cras eu velit in augue finibus dictum.

# SEARCH
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel maximus arcu. Aliquam consequat erat ut leo rutrum, vel vulputate tortor vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum mi sodales ullamcorper vestibulum. Duis a turpis turpis. Praesent augue lectus, iaculis at ante sodales, pellentesque efficitur neque. Sed tempor in ligula in dictum. Cras eu velit in augue finibus dictum.

Vivamus euismod sit amet massa eu interdum. Praesent egestas tellus id arcu placerat, vel luctus tellus laoreet. Sed lacinia ante quis maximus scelerisque. Integer euismod, lectus vitae malesuada aliquam, massa massa pellentesque risus, sed faucibus purus libero at lectus. Quisque ultrices vestibulum elit non egestas. Curabitur et sem justo. Maecenas condimentum nisi porttitor justo iaculis, sit amet accumsan quam pellentesque.

Pellentesque nisl est, auctor non porttitor nec, volutpat eu sapien. Suspendisse ac nisl vel quam vehicula vulputate at vel justo. Cras ullamcorper luctus ante, sed accumsan velit imperdiet at. Cras dictum, ante a ultrices rhoncus, dolor velit congue justo, eget pulvinar odio nunc non leo. Integer nisl mi, pretium sit amet arcu nec, sagittis molestie velit. Aenean tempus eros nec felis condimentum congue. In commodo tortor felis, nec ullamcorper mauris commodo in. Duis ultrices lorem eget magna lacinia, sit amet dapibus tellus lobortis. Mauris in vestibulum diam. Integer tristique at magna id ultrices. Proin efficitur nunc imperdiet, iaculis enim id, ultrices mauris. Vivamus erat magna, interdum nec pellentesque sed, dictum id urna. Quisque sit amet varius lorem, eget placerat lectus.

Curabitur et tortor ac purus efficitur imperdiet ac a orci. Praesent eu vestibulum augue, sed molestie orci. Vivamus vitae turpis consectetur, semper arcu quis, interdum est. Mauris ut mauris enim. Duis suscipit dolor sit amet turpis facilisis, accumsan vehicula nisi mollis. Proin ac pellentesque turpis. Duis faucibus, tortor vel consequat dapibus, orci libero egestas sem, eleifend gravida enim sem non magna. Fusce libero lorem, mollis quis viverra at, pharetra ut dui. Quisque a vehicula urna, ut ornare diam. Sed eleifend tellus sed tellus malesuada, vitae ultrices augue tempus. Vestibulum tincidunt nisi in turpis condimentum lacinia. Etiam lacus lectus, tincidunt ut magna et, tincidunt euismod mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Suspendisse placerat facilisis lacus ut pellentesque. Morbi finibus felis eu molestie venenatis. Fusce bibendum elementum dui, eu ullamcorper velit molestie luctus. Maecenas eros ipsum, tempus eu leo non, eleifend consequat urna. Nunc in metus et orci porta dignissim vel nec neque. Vivamus gravida semper dui, ac pharetra metus. Aliquam mollis pharetra nulla id tempus. Maecenas mauris sem, pellentesque vitae ligula vitae, pulvinar euismod turpis. Sed sollicitudin, magna non porta volutpat, velit risus imperdiet magna, vitae iaculis quam eros et sapien. Cras vitae aliquam sapien, nec elementum magna. Mauris viverra euismod lorem, nec finibus turpis condimentum non. Nulla cursus mi eros, et vehicula sem iaculis ac. Nunc eleifend nec odio id suscipit. Praesent neque orci, mattis a condimentum eget, lobortis ut ipsum.