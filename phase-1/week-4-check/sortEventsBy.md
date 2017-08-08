## Examples

```js
sortEventsBy("venue")
// returns => [
//             ['Cat Lovers Meetup', 'Church Basement',    '2017-05-02'],
//             ['Gamers Anonymous',  'Church Basement',    '2017-08-01'],
//             ['D&D Marathon',      'Community Center',   '2017-04-29'],
//             ['Spanish Book Club', 'Community Center',   '2017-05-13'],
//             ['Hip Hop Dancing',   'School Auditorium',  '2017-06-10'],
//             ['Bingo Night',       'YMCA',               '2017-04-29'],
//            ]

sortEventsBy()
// returns => [
//             ['Bingo Night',       'YMCA',               '2017-04-29'],
//             ['Cat Lovers Meetup', 'Church Basement',    '2017-05-02'],
//             ['D&D Marathon',      'Community Center',   '2017-04-29'],
//             ['Gamers Anonymous',  'Church Basement',    '2017-08-01'],
//             ['Hip Hop Dancing',   'School Auditorium',  '2017-06-10'],
//             ['Spanish Book Club', 'Community Center',   '2017-05-13'],
//            ]
```

## Tests

input: `name`
output:
```
Bingo Night YMCA 2017-04-29
Cat Lovers Meetup Church Basement 2017-05-02
D&D Marathon Community Center 2017-04-29
Gamers Anonymous Church Basement 2017-08-01
Hip Hop Dancing School Auditorium 2017-06-10
Spanish Book Club Community Center 2017-05-13
```

input: `venue`
output:
```
Cat Lovers Meetup Church Basement 2017-05-02
Gamers Anonymous Church Basement 2017-08-01
D&D Marathon Community Center 2017-04-29
Spanish Book Club Community Center 2017-05-13
Hip Hop Dancing School Auditorium 2017-06-10
Bingo Night YMCA 2017-04-29
```

input: `date`
output:
```
Bingo Night YMCA 2017-04-29
D&D Marathon Community Center 2017-04-29
Cat Lovers Meetup Church Basement 2017-05-02
Spanish Book Club Community Center 2017-05-13
Hip Hop Dancing School Auditorium 2017-06-10
Gamers Anonymous Church Basement 2017-08-01
```
