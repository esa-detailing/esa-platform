import xss from 'xss'

export const sanitiseBody = (req: any, res: any, next: any) => {
  if (req.body) {
    for (const key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = xss(req.body[key])
      }
    }
  }
  next()
}
