//
//  CordovaDisableNSURLCache.m
//  cordova-disable-nsurl-cache
//
//  Created by Mauro Gadaleta  on 16/09/2014.
//
//

#import "CordovaDisableNSURLCache.h"

@implementation CordovaDisableNSURLCache

- (void)pluginInitialize
{
    int cacheSizeMemory = 8 * 1024 * 1024; // 32MB
    int cacheSizeDisk = 0; // Disable the cache setting to 0 bytes cache allowed
    
#if __has_feature(objc_arc)
    NSURLCache* sharedCache = [[NSURLCache alloc] initWithMemoryCapacity:cacheSizeMemory diskCapacity:cacheSizeDisk diskPath:@"nsurlcache"];
#else
    NSURLCache* sharedCache = [[[NSURLCache alloc] initWithMemoryCapacity:cacheSizeMemory diskCapacity:cacheSizeDisk diskPath:@"nsurlcache"] autorelease];
#endif
    [NSURLCache setSharedURLCache:sharedCache];
    
}

- (CordovaDisableNSURLCache*)initWithWebView:(UIWebView*)theWebView
{
    return self;
}

@end